import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import checkPerfectNumber from "./perfect_number.ts";

test("507. Perfect Number", () => {
  assertStrictEq(checkPerfectNumber(28), true);
  assertStrictEq(checkPerfectNumber(27), false);
  assertStrictEq(checkPerfectNumber(6), true);
  assertStrictEq(checkPerfectNumber(1), false);
  assertStrictEq(checkPerfectNumber(0), false);
});
