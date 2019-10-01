import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import Logger from "./logger_rate_limiter.ts";

test("359. Logger Rate Limiter", () => {
  const logger = new Logger();

  assert(logger.shouldPrintMessage(1, "foo") === true);
  assert(logger.shouldPrintMessage(2, "bar") === true);
  assert(logger.shouldPrintMessage(3, "foo") === false);
  assert(logger.shouldPrintMessage(8, "bar") === false);
  assert(logger.shouldPrintMessage(10, "foo") === false);
  assert(logger.shouldPrintMessage(11, "foo") === true);
});
