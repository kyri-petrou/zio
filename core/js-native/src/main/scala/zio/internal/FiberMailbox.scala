package zio.internal

import java.util.concurrent.ConcurrentLinkedQueue

private final class FiberMailbox extends ConcurrentLinkedQueue[FiberMessage] with AbstractMpscQueue[FiberMessage] {
  def relaxedPoll(): FiberMessage = poll()
}
