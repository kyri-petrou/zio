package zio

import zio.test.Assertion._
import zio.test.TestAspect._
import zio.test._

object SemaphoreSpec extends ZIOBaseSpec {
  override def spec = suite("SemaphoreSpec")(
    test("withPermit automatically releases the permit if the effect is interrupted") {
      for {
        promise   <- Promise.make[Nothing, Unit]
        semaphore <- Semaphore.make(1)
        effect     = semaphore.withPermit(promise.succeed(()) *> ZIO.never)
        fiber     <- effect.fork
        _         <- promise.await
        _         <- fiber.interrupt
        permits   <- semaphore.available
      } yield assert(permits)(equalTo(1L))
    } @@ exceptJS(nonFlaky),
    test("withPermit acquire is interruptible") {
      for {
        semaphore <- Semaphore.make(0L)
        effect     = semaphore.withPermit(ZIO.unit)
        fiber     <- effect.fork
        _         <- fiber.interrupt
      } yield assertCompletes
    } @@ exceptJS(nonFlaky),
    test("withPermitsScoped releases same number of permits") {
      for {
        semaphore <- Semaphore.make(3L)
        ref       <- Ref.make(-1L)
        _         <- ZIO.scoped(semaphore.withPermitsScoped(2) *> semaphore.available.flatMap(ref.set))
        permits   <- semaphore.available
        inner     <- ref.get
      } yield assertTrue(permits == 3L, inner == 1L)
    } @@ exceptJS(nonFlaky)
  )
}
