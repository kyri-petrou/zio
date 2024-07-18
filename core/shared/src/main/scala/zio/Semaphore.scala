/*
 * Copyright 2018-2024 John A. De Goes and the ZIO Contributors
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

package zio

import zio.stacktracer.TracingImplicits.disableAutoTrace
import zio.stm.TSemaphore

import java.util.concurrent.ConcurrentLinkedQueue
import java.util.concurrent.atomic.{AtomicBoolean, AtomicReference}
import scala.annotation.tailrec
import scala.collection.immutable.{Queue => ScalaQueue}

/**
 * An asynchronous semaphore, which is a generalization of a mutex. Semaphores
 * have a certain number of permits, which can be held and released concurrently
 * by different parties. Attempts to acquire more permits than available result
 * in the acquiring fiber being suspended until the specified number of permits
 * become available.
 *
 * If you need functionality that `Semaphore` doesnt' provide, use a
 * [[TSemaphore]] and define it in a [[zio.stm.ZSTM]] transaction.
 */
sealed trait Semaphore extends Serializable {

  /**
   * Returns the number of available permits.
   */
  def available(implicit trace: Trace): UIO[Long]

  /**
   * Executes the specified workflow, acquiring a permit immediately before the
   * workflow begins execution and releasing it immediately after the workflow
   * completes execution, whether by success, failure, or interruption.
   */
  def withPermit[R, E, A](zio: ZIO[R, E, A])(implicit trace: Trace): ZIO[R, E, A]

  /**
   * Returns a scoped workflow that describes acquiring a permit as the
   * `acquire` action and releasing it as the `release` action.
   */
  def withPermitScoped(implicit trace: Trace): ZIO[Scope, Nothing, Unit]

  /**
   * Executes the specified workflow, acquiring the specified number of permits
   * immediately before the workflow begins execution and releasing them
   * immediately after the workflow completes execution, whether by success,
   * failure, or interruption.
   */
  def withPermits[R, E, A](n: Long)(zio: ZIO[R, E, A])(implicit trace: Trace): ZIO[R, E, A]

  /**
   * Returns a scoped workflow that describes acquiring the specified number of
   * permits and releasing them when the scope is closed.
   */
  def withPermitsScoped(n: Long)(implicit trace: Trace): ZIO[Scope, Nothing, Unit]
}

object Semaphore {

  /**
   * Creates a new `Semaphore` with the specified number of permits.
   */
  def make(permits: => Long)(implicit trace: Trace): UIO[Semaphore] =
    ZIO.succeed(unsafe.make(permits)(Unsafe.unsafe))

  object unsafe {
    def make(permits: Long)(implicit unsafe: Unsafe): Semaphore =
      if (permits == 1L) new SinglePermitSemaphore
      else new MultiPermitSemaphore(permits)
  }

  private final class SinglePermitSemaphore(implicit unsafe: Unsafe) extends Semaphore {
    private val ref = new AtomicReference[ScalaQueue[Promise[Nothing, Unit]]](null)

    def available(implicit trace: Trace): UIO[Long] =
      ZIO.succeed(if (ref.get() eq null) 1L else 0L)

    def withPermit[R, E, A](zio: ZIO[R, E, A])(implicit trace: Trace): ZIO[R, E, A] =
      ZIO.uninterruptibleMask { restore =>
        restore(reserve1() *> zio).exitWith { exit =>
          release1()
          exit
        }
      }

    def withPermitScoped(implicit trace: Trace): ZIO[Scope, Nothing, Unit] =
      ZIO.suspendSucceed(reserve1()).withFinalizer(_ => ZIO.succeed(release1()))

    def withPermits[R, E, A](n: Long)(zio: ZIO[R, E, A])(implicit trace: Trace): ZIO[R, E, A] =
      if (n == 0L) zio
      else if (n == 1L) withPermit(zio)
      else if (n > 1L) ZIO.never
      else ZIO.die(new IllegalArgumentException(s"Unexpected number `$n` permits requested."))

    def withPermitsScoped(n: Long)(implicit trace: Trace): ZIO[Scope, Nothing, Unit] =
      if (n == 0L) ZIO.unit
      else if (n == 1L) withPermitScoped
      else if (n > 1L) ZIO.never
      else ZIO.die(new IllegalArgumentException(s"Unexpected number `$n` permits requested."))

    // NOTE: To improve performance, the IO returned is not referentially transparent!
    private def reserve1(): IO[Nothing, Unit] = {
      var loop = true
      var pr   = null.asInstanceOf[Promise[Nothing, Unit]]
      var old  = null.asInstanceOf[ScalaQueue[Promise[Nothing, Unit]]]

      while (loop) {
        old = ref.get()
        val queue =
          if (old eq null) ScalaQueue.empty
          else {
            if (pr eq null) pr = Promise.unsafe.make[Nothing, Unit](FiberId.None)
            old.enqueue(pr)
          }
        loop = !ref.compareAndSet(old, queue)
      }
      if (old eq null) Exit.unit else pr.await(Trace.empty)
    }

    private def release1(): Unit = {
      var loop = true
      while (loop) {
        val queue = ref.get()
        if (queue.isEmpty) loop = !ref.compareAndSet(queue, null)
        else {
          val (pr, q) = queue.dequeue
          if (ref.compareAndSet(queue, q)) {
            pr.unsafe.done(Exit.unit)
            loop = false
          }
        }
      }
    }
  }

  private final class MultiPermitSemaphore(permits: Long)(implicit unsafe: Unsafe) extends Semaphore {
    import State._
    private val ref = Ref.unsafe.make[State](Available(permits))

    def available(implicit trace: Trace): UIO[Long] =
      ref.get.map {
        case _: Waiting         => 0L
        case Available(permits) => permits
      }

    def withPermit[R, E, A](zio: ZIO[R, E, A])(implicit trace: Trace): ZIO[R, E, A] =
      withPermits(1L)(zio)

    def withPermitScoped(implicit trace: Trace): ZIO[Scope, Nothing, Unit] =
      withPermitsScoped(1L)

    def withPermits[R, E, A](n: Long)(zio: ZIO[R, E, A])(implicit trace: Trace): ZIO[R, E, A] =
      ZIO.acquireReleaseWith(reserve(n))(_.release)(_.acquire *> zio)

    def withPermitsScoped(n: Long)(implicit trace: Trace): ZIO[Scope, Nothing, Unit] =
      ZIO.acquireRelease(reserve(n))(_.release).flatMap(_.acquire)

    private def reserve(n: Long)(implicit trace: Trace): UIO[Reservation] =
      if (n > 0L)
        ref.modify {
          case Available(permits) if permits >= n =>
            Reservation(ZIO.unit, releaseN(n)) -> Available(permits - n)
          case Available(permits) =>
            val promise = Promise.unsafe.make[Nothing, Unit](FiberId.None)
            Reservation(promise.await, restore(promise, n)) -> Waiting.make(promise, n - permits)
          case Waiting(queue) =>
            val promise = Promise.unsafe.make[Nothing, Unit](FiberId.None)
            Reservation(promise.await, restore(promise, n)) -> Waiting(queue.enqueue(Waiting.Entry(promise, n)))
        }
      else if (n == 0L)
        ZIO.succeed(Reservation.NoOp)
      else
        ZIO.die(new IllegalArgumentException(s"Unexpected negative `$n` permits requested."))

    private def restore(promise: Promise[Nothing, Unit], n: Long)(implicit trace: Trace): UIO[Any] =
      ref.modify {
        case Waiting(queue) =>
          queue.find(_.promise eq promise) match {
            case Some(entry) => releaseN(n - entry.permits) -> Waiting(queue.filter(_.promise ne promise))
            case _           => releaseN(n)                 -> Waiting(queue)
          }
        case Available(permits) => Exit.unit -> Available(permits + n)
      }.flatten

    private def releaseN(n: Long)(implicit trace: Trace): UIO[Any] = {

      @tailrec
      def loop(
        n: Long,
        state: State,
        acc: UIO[Any]
      ): (UIO[Any], State) =
        state match {
          case Available(permits)        => acc -> Available(permits + n)
          case Waiting(q0) if q0.isEmpty => acc -> Available(n)
          case Waiting(q0) =>
            val (entry, queue) = q0.dequeue
            val promise        = entry.promise
            val permits        = entry.permits
            if (n > permits)
              loop(n - permits, Waiting(queue), acc *> promise.succeed(()))
            else if (n == permits)
              (acc *> promise.succeed(())) -> Waiting(queue)
            else
              acc -> Waiting(Waiting.Entry(promise, permits - n) +: queue)
        }

      ref.modify(loop(n, _, Exit.unit)).flatten
    }

    private sealed trait State
    private object State {
      final case class Available(permits: Long)                  extends State
      final case class Waiting(queue: ScalaQueue[Waiting.Entry]) extends State

      object Waiting {
        def make(promise: Promise[Nothing, Unit], permits: Long): Waiting =
          new Waiting(ScalaQueue(Entry(promise, permits)))

        final case class Entry(promise: Promise[Nothing, Unit], permits: Long)
      }
    }

    private case class Reservation(acquire: UIO[Unit], release: UIO[Any])
    private object Reservation {
      val NoOp = Reservation(ZIO.unit, ZIO.unit)
    }
  }
}
