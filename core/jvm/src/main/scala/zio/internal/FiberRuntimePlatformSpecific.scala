package zio.internal

private[internal] trait FiberRuntimePlatformSpecific {
  private[internal] type FiberMailbox = org.jctools.queues.unpadded.MpscLinkedUnpaddedQueue[FiberMessage]
}
