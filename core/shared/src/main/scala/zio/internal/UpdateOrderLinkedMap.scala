/*
 * Copyright 2019-2024 John A. De Goes and the ZIO Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package zio.internal

import scala.annotation.tailrec
import scala.collection.immutable.{HashMap, VectorBuilder}
import scala.collection.{AbstractIterator, mutable}
import scala.util.hashing.MurmurHash3

private[zio] final class UpdateOrderLinkedMap[K, +V](
  fields: Vector[Any],
  underlying: HashMap[K, UpdateOrderLinkedMap.Value[V]]
) extends Serializable { self =>
  import UpdateOrderLinkedMap._

  def size: Int = underlying.size

  def isEmpty: Boolean = size == 0

  def keySet: Set[K] = underlying.keySet

  def getOrNull(key: K): V = {
    val v = underlying.getOrElse(key, null)
    if (v eq null) null.asInstanceOf[V]
    else v.value
  }

  def updated[V1 >: V](key: K, value: V1): UpdateOrderLinkedMap[K, V1] = {
    val fs       = fields
    val map      = underlying
    val i        = fs.length
    val existing = map.getOrElse(key, null)
    if (existing eq null) {
      new UpdateOrderLinkedMap(fs :+ key, map.updated(key, Value(i, value)))
    } else if (existing.idx == i - 1) {
      // If the entry to be added is at the tail of the fields, we can just update the value
      val newMap = map.updated(key, existing.copy(value = value))
      if (newMap eq map) self else new UpdateOrderLinkedMap(fs, newMap)
    } else {
      val arr = Array.ofDim[Any](i + 1)
      fs.copyToArray(arr, 0, i)
      val newMap = updateValue[V1](map, arr, i)(key, existing, value)
      new UpdateOrderLinkedMap(arr.toVector, newMap).maybeReindex()
    }
  }

  def addAll[V1 >: V](entries: Iterable[(K, V1)]): UpdateOrderLinkedMap[K, V1] =
    entries.size match {
      case 0 => self
      case 1 =>
        val kv = entries.head
        updated(kv._1, kv._2)
      case n =>
        var i   = fields.length
        val arr = Array.ofDim[Any](i + n)
        fields.copyToArray(arr, 0, i)
        var updated: HashMap[K, Value[V1]] = underlying

        val it = entries.iterator
        while (it.hasNext) {
          val kv    = it.next()
          val key   = kv._1
          val value = kv._2

          val existing = updated.getOrElse(key, null)
          if (existing eq null) {
            updated = updated.updated(key, Value(i, value))
            arr(i) = key
          } else {
            updated = updateValue(updated, arr, i)(key, existing, value)
          }
          i += 1
        }
        new UpdateOrderLinkedMap(arr.toVector, updated).maybeReindex()
    }

  private[this] def updateValue[V1 >: V](
    map: HashMap[K, Value[V1]],
    arr: Array[Any],
    i: Int
  )(
    key: K,
    oldValue: Value[V1],
    newValue: V1
  ): HashMap[K, Value[V1]] = {
    val oldIdx = oldValue.idx

    // Calculate next of kin
    val next = {
      val next0 = oldIdx + 1
      val offset = arr(next0) match {
        case t: Tombstone => t.distance
        case _            => 0
      }
      next0 + offset
    }

    // Calculate first index of preceding tombstone sequence
    val first =
      if (oldIdx == 0) 0
      else
        arr(oldIdx - 1) match {
          case t: Tombstone =>
            val d = t.distance
            if (d < 0 && oldIdx >= d) oldIdx + d
            else if (d < 0) 0
            else if (d == 1) oldIdx - 1
            else throw new IllegalStateException("tombstone indicate wrong position: " + d)
          case _ =>
            oldIdx
        }

    // Calculate last index of succeeding tombstone sequence
    val last = next - 1

    arr(first) = Tombstone(next - first)
    if (last != first) {
      arr(last) = Tombstone(first - 1 - last)
    }
    if (oldIdx != first && oldIdx != last) {
      arr(oldIdx) = Tombstone(next - oldIdx)
    }
    arr(i) = key
    map.updated(key, Value(i, newValue))
  }

  /**
   * Rebuilds the underlying vector and map, removing tombstones and reindexing
   * the elements, but only if the number of dead elements exceeds 10000.
   *
   * This should never happen, but we add it as a safeguard against memory leaks
   * due to weird usage patterns.
   */
  private def maybeReindex(): UpdateOrderLinkedMap[K, V] =
    if (self.fields.size - size > 10000) fromUnsafe(iterator0)
    else self

  def iterator: Iterator[(K, V)] = iteratorLz.iterator

  @transient
  private[this] lazy val iteratorLz: LzList[(K, V)] = {
    val it = iterator0
    def loop(): LzList[(K, V)] =
      if (it.hasNext) LzList(it.next(), loop())
      else LzList.empty
    loop()
  }

  private[this] def iterator0: Iterator[(K, V)] = new AbstractIterator[(K, V)] {
    private[this] var slot    = -1
    private[this] val maxSlot = fields.length - 1

    @tailrec
    final private[this] def findNextKey(nextSlot: Int): K =
      fields(nextSlot) match {
        case t: Tombstone => findNextKey(nextSlot + t.distance)
        case k =>
          slot = nextSlot
          k.asInstanceOf[K]
      }

    override final def hasNext: Boolean = slot < maxSlot

    override final def next(): (K, V) = {
      val key = findNextKey(slot + 1)
      (key, underlying(key).value)
    }
  }

  def reverseIterator: Iterator[(K, V)] = reverseIteratorLz.iterator

  @transient
  private[this] lazy val reverseIteratorLz: LzList[(K, V)] = {
    val it = reverseIterator0
    def loop(): LzList[(K, V)] =
      if (it.hasNext) LzList(it.next(), loop())
      else LzList.empty
    loop()
  }

  private def reverseIterator0: Iterator[(K, V)] = new AbstractIterator[(K, V)] {
    private[this] var slot      = fields.length
    private[this] var remaining = underlying.size

    @tailrec
    final private[this] def findNextKey(nextSlot: Int): K =
      fields(nextSlot) match {
        case t: Tombstone =>
          val d = t.distance
          val dt =
            if (d < 0) nextSlot + d
            else if (d == 1) nextSlot - 1
            else throw new IllegalStateException("tombstone indicate wrong position: " + d)
          findNextKey(dt)
        case k =>
          slot = nextSlot
          remaining -= 1
          k.asInstanceOf[K]
      }

    override final def hasNext: Boolean = remaining > 0

    override final def next(): (K, V) = {
      val key = findNextKey(slot - 1)
      (key, underlying(key).value)
    }
  }

  def toList: List[(K, V)] = iterator.toList

  def toIterable: Iterable[(K, V)] =
    new OptimizedIterable[(K, V)](iterator, size)

  @throws[NoSuchElementException]("When the map is empty")
  def last: (K, V) = {
    val last = fields.last.asInstanceOf[K]
    (last, underlying(last).value)
  }

  override def hashCode(): Int = MurmurHash3.orderedHash(iterator)

  override def toString: String = iterator.mkString("UpdateOrderLinkedMap(", ", ", ")")
}

private[zio] object UpdateOrderLinkedMap extends UpdateOrderLinkedMapCompanionVersionSpecific {
  private final case class Tombstone(distance: Int)
  private final case class Value[+V](idx: Int, value: V)

  private[this] final val EmptyMap: UpdateOrderLinkedMap[Nothing, Nothing] =
    new UpdateOrderLinkedMap[Nothing, Nothing](Vector.empty, HashMap.empty)

  def empty[K, V]: UpdateOrderLinkedMap[K, V] = EmptyMap.asInstanceOf[UpdateOrderLinkedMap[K, V]]

  def fromMap[K, V](map: Map[K, V]): UpdateOrderLinkedMap[K, V] = fromUnsafe(map.iterator)

  /**
   * Keys in the iterator '''MUST be unique'''!
   */
  private def fromUnsafe[K, V](it: Iterator[(K, V)]): UpdateOrderLinkedMap[K, V] = {
    if (it.isEmpty) return EmptyMap.asInstanceOf[UpdateOrderLinkedMap[K, V]]

    val vectorBuilder = new VectorBuilder[K]
    val mapBuilder    = HashMap.newBuilder[K, Value[V]]
    var i             = 0
    while (it.hasNext) {
      val kv = it.next()
      val k  = kv._1
      vectorBuilder += k
      mapBuilder += ((k, Value(i, kv._2)))
      i += 1
    }
    new UpdateOrderLinkedMap(vectorBuilder.result(), mapBuilder.result())
  }

  def newBuilder[K, V]: UpdateOrderLinkedMap.Builder[K, V] = new UpdateOrderLinkedMap.Builder[K, V]

  final class Builder[K, V] { self =>
    private[this] var entries: List[(K, V)]               = Nil
    private[this] var aliased: UpdateOrderLinkedMap[K, V] = _

    def addOne(elem: (K, V)): UpdateOrderLinkedMap.Builder[K, V] = {
      if (aliased ne null) {
        aliased = aliased.updated(elem._1, elem._2)
      } else {
        // Place them in reverse order, we'll reverse them back during `result()`
        entries = elem :: entries
      }
      this
    }

    def clear(): Unit = {
      entries = Nil
      aliased = null
    }

    def result(): UpdateOrderLinkedMap[K, V] = {
      if (aliased eq null) {
        var reversed  = List.empty[(K, V)]
        var remaining = entries
        val set       = mutable.HashSet.empty[K]
        while (remaining ne Nil) {
          val head = remaining.head
          if (set.add(head._1)) reversed = head :: reversed
          remaining = remaining.tail
        }
        aliased = fromUnsafe(reversed.iterator)
      }
      aliased
    }
  }

  private sealed trait LzList[+A] { self =>
    protected def head: A
    protected def tail: LzList[A]

    final def isEmpty: Boolean = this eq LzList.Empty

    final def iterator: Iterator[A] = new AbstractIterator[A] {
      private[this] var current: LzList[A] = self

      override def hasNext: Boolean = !current.isEmpty

      override def next(): A = {
        // Never call `tail` before `head`!
        val cur    = current
        val result = cur.head
        current = cur.tail
        result
      }
    }
  }

  private object LzList {
    def apply[A](head: A, tail: => LzList[A]): LzList[A] =
      new Cons(head, () => tail)

    def empty[A]: LzList[A] = Empty

    private case object Empty extends LzList[Nothing] {
      protected def head: Nothing         = throw new NoSuchElementException("head of empty list")
      protected def tail: LzList[Nothing] = throw new NoSuchElementException("tail of empty list")
    }

    private final class Cons[A](override val head: A, _tail: () => LzList[A]) extends LzList[A] {
      @transient protected lazy val tail: LzList[A] = _tail()
    }
  }
}
