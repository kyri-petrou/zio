package zio.internal

import java.util.concurrent.ConcurrentLinkedQueue

private[internal] trait FiberRuntimePlatformSpecific {
  private[internal] final class FiberMailbox extends ConcurrentLinkedQueue[FiberMessage] {
    def relaxedPoll(): FiberMessage = poll()
  }
}
