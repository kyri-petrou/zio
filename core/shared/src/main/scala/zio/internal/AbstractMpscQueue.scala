package zio.internal

private[zio] trait AbstractMpscQueue[A] {
  def isEmpty: Boolean
  def offer(message: A): Boolean
  def poll(): A
  def relaxedPoll(): A
}
