package zio

import zio.test.Assertion._
import zio.test.TestAspect._
import zio.test._

object SemaphoreSpec extends ZIOBaseSpec {

  private def tests(n: Long) = List(
    test("withPermit automatically releases the permit if the effect is interrupted") {
      for {
        promise   <- Promise.make[Nothing, Unit]
        semaphore <- Semaphore.make(n)
        effect     = semaphore.withPermit(promise.succeed(()) *> ZIO.never)
        fiber     <- effect.fork
        _         <- promise.await
        _         <- fiber.interrupt
        permits   <- semaphore.available
      } yield assert(permits)(equalTo(n))
    } @@ jvm(nonFlaky),
    test("withPermit acquire is interruptible") {
      for {
        semaphore <- Semaphore.make(0L)
        effect     = semaphore.withPermit(ZIO.unit)
        fiber     <- effect.fork
        _         <- fiber.interrupt
      } yield assertCompletes
    } @@ jvm(nonFlaky),
    test("withPermitsScoped releases same number of permits") {
      for {
        semaphore <- Semaphore.make(n)
        _         <- ZIO.scoped(semaphore.withPermitsScoped(n))
        permits   <- semaphore.available
      } yield assertTrue(permits == n)
    }
  )
  override def spec = suite("SemaphoreSpec")(
    suite("single permit")(tests(1L)),
    suite("multiple permits")(tests(2L))
  )
}
