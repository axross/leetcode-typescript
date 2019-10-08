import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import Logger from "./logger_rate_limiter.ts";

test("359. Logger Rate Limiter", () => {
  const logger = new Logger();

  assertStrictEq(logger.shouldPrintMessage(1, "foo"), true);
  assertStrictEq(logger.shouldPrintMessage(2, "bar"), true);
  assertStrictEq(logger.shouldPrintMessage(3, "foo"), false);
  assertStrictEq(logger.shouldPrintMessage(8, "bar"), false);
  assertStrictEq(logger.shouldPrintMessage(10, "foo"), false);
  assertStrictEq(logger.shouldPrintMessage(11, "foo"), true);
});
