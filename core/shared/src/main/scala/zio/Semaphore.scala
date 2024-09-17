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

import java.util.concurrent.atomic.AtomicReference
import scala.annotation.{switch, tailrec}
import scala.collection.immutable.{Queue => ScalaQueue}
import scala.collection.mutable.ListBuffer

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
      new Semaphore {
        private val ref = new AtomicReference[AnyRef](State.Available(permits.toInt))

        def available(implicit trace: Trace): UIO[Long] = ZIO.succeed {
          ref.get match {
            case s: State.Available => s.permits
            case _                  => 0L
          }
        }

        def withPermit[R, E, A](zio: ZIO[R, E, A])(implicit trace: Trace): ZIO[R, E, A] =
          withPermits(1L)(zio)

        def withPermitScoped(implicit trace: Trace): ZIO[Scope, Nothing, Unit] =
          withPermitsScoped(1L)

        def withPermits[R, E, A](n: Long)(zio: ZIO[R, E, A])(implicit trace: Trace): ZIO[R, E, A] =
          ZIO.uninterruptibleMask { restore =>
            val reservation = reserve(n)
            if (reservation eq null)
              ZIO.die(new IllegalArgumentException(s"Unexpected negative `$n` permits requested."))
            else
              restore(reservation.acquire.flatMap(_ => zio)).foldCauseZIO(
                c => {
                  reservation.release()
                  Exit.failCause(c)
                },
                v => {
                  reservation.release()
                  Exit.succeed(v)
                }
              )
          }

        def withPermitsScoped(n: Long)(implicit trace: Trace): ZIO[Scope, Nothing, Unit] =
          ZIO.suspendSucceed {
            val reservation = reserve(n.toInt)
            if (reservation eq null)
              ZIO.die(new IllegalArgumentException(s"Unexpected negative `$n` permits requested."))
            else
              reservation.acquire.withFinalizer(_ => ZIO.succeed(reservation.release()))
          }

        final private case class Reservation(acquire: UIO[Unit], release: () => Unit)

        private def reserve(n: Long)(implicit trace: Trace): Reservation =
          if (n > 0) {
            var promise  = null.asInstanceOf[Promise[Nothing, Unit]]
            var newState = null.asInstanceOf[AnyRef]
            var loop     = true
            while (loop) {
              val oldState = ref.get()
              newState = oldState match {
                case s: State.Available =>
                  val permits = s.permits
                  if (permits >= n) {
                    State.Available(permits - n)
                  } else {
                    if (promise eq null) promise = Promise.unsafe.make[Nothing, Unit](FiberId.None)(Unsafe)
                    State.Waiting(QueuedElement(promise, n - permits))
                  }
                case queue: State.Waiting =>
                  if (promise eq null) promise = Promise.unsafe.make[Nothing, Unit](FiberId.None)(Unsafe)
                  queue.enqueue(QueuedElement(promise, n))
              }
              if (ref.compareAndSet(oldState, newState))
                loop = false
            }
            if (newState.isInstanceOf[State.Available])
              Reservation(Exit.unit, release(n))
            else
              Reservation(promise.await, release(n))
          } else if (n == 0L)
            Reservation(Exit.unit, () => ())
          else
            null

        private def release(n: Long): () => Unit =
          if (n == 1L) release1
          else releaseN(n)

        private val release1: () => Unit = { () =>
          var promise = null.asInstanceOf[Promise[Nothing, Unit]]
          var loop0   = true
          while (loop0) {
            val oldState = ref.get()
            val newState = oldState match {
              case s: State.Available =>
                State.Available(s.permits + 1)
              case q: State.Waiting =>
                val elem     = q.head
                val queue    = q.tail
                val promise0 = elem.promise
                val permits  = elem.permits
                if (permits == 1L) {
                  promise = promise0
                  if (queue.isEmpty) State.Available(0)
                  else queue
                } else
                  QueuedElement(promise0, permits - 1) +: queue

            }
            if (ref.compareAndSet(oldState, newState)) {
              if (promise ne null) promise.unsafe.done(Exit.unit)(Unsafe)
              loop0 = false
            } else {
              promise = null
            }
          }
        }

        private def releaseN(n: Long): () => Unit = () => {
          val promises = new ListBuffer[Promise[Nothing, Unit]]

          @tailrec
          def loop(n: Long, state: AnyRef): AnyRef =
            state match {
              case s: State.Available =>
                State.Available(s.permits + n)
              case q: State.Waiting =>
                val elem    = q.head
                val queue   = q.tail
                val promise = elem.promise
                val permits = elem.permits
                if (n > permits) {
                  promises.addOne(promise)
                  loop(n - permits, queue)
                } else if (n == permits) {
                  promises.addOne(promise)
                  if (q.isEmpty) State.Available(0)
                  else queue
                } else
                  QueuedElement(promise, permits - n) +: queue
            }

          var loop0 = true
          while (loop0) {
            val oldState = ref.get()
            val newState = loop(n, oldState)
            if (ref.compareAndSet(oldState, newState)) {
              promises.foreach(_.unsafe.done(Exit.unit)(Unsafe))
              loop0 = false
            } else {
              promises.clear()
            }
          }
        }
      }

    private final case class QueuedElement(promise: Promise[Nothing, Unit], permits: Long)

    private object State {
      type Waiting = ScalaQueue[QueuedElement]
      object Waiting {
        def apply(queued: QueuedElement): Waiting = ScalaQueue(queued)
      }

      final class Available private (val permits: Long)
      object Available {
        private val Available0  = new Available(0)
        private val Available1  = new Available(1)
        private val Available2  = new Available(2)
        private val Available3  = new Available(3)
        private val Available4  = new Available(4)
        private val Available5  = new Available(5)
        private val Available6  = new Available(6)
        private val Available7  = new Available(7)
        private val Available8  = new Available(8)
        private val Available9  = new Available(9)
        private val Available10 = new Available(10)
        private val Available11 = new Available(11)
        private val Available12 = new Available(12)
        private val Available13 = new Available(13)
        private val Available14 = new Available(14)
        private val Available15 = new Available(15)
        private val Available16 = new Available(16)
        private val Available17 = new Available(17)
        private val Available18 = new Available(18)
        private val Available19 = new Available(19)
        private val Available20 = new Available(20)
        private val Available21 = new Available(21)
        private val Available22 = new Available(22)

        def apply(permits: Long): Available =
          (permits.toInt: @switch) match {
            case 0  => Available0
            case 1  => Available1
            case 2  => Available2
            case 3  => Available3
            case 4  => Available4
            case 5  => Available5
            case 6  => Available6
            case 7  => Available7
            case 8  => Available8
            case 9  => Available9
            case 10 => Available10
            case 11 => Available11
            case 12 => Available12
            case 13 => Available13
            case 14 => Available14
            case 15 => Available15
            case 16 => Available16
            case 17 => Available17
            case 18 => Available18
            case 19 => Available19
            case 20 => Available20
            case 21 => Available21
            case 22 => Available22
            case _  => new Available(permits)
          }
      }
    }
  }
}
