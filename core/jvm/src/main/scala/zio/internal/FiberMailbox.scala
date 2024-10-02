package zio.internal

import org.jctools.queues.atomic.unpadded.MpscLinkedAtomicUnpaddedQueue

private final class FiberMailbox
    extends MpscLinkedAtomicUnpaddedQueue[FiberMessage]
    with AbstractMpscQueue[FiberMessage]
