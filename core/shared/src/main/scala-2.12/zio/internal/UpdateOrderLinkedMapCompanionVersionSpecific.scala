package zio.internal

import scala.collection.AbstractIterable

private[internal] trait UpdateOrderLinkedMapCompanionVersionSpecific {
  final class OptimizedIterable[+V](it: Iterator[V], size0: Int) extends AbstractIterable[V] {
    def iterator: Iterator[V] = it
    override def size: Int    = size0
  }
}
