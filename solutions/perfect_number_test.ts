import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import checkPerfectNumber from "./perfect_number.ts";

test("507. Perfect Number", () => {
  assert(checkPerfectNumber(28) === true);
  assert(checkPerfectNumber(27) === false);
  assert(checkPerfectNumber(6) === true);
  assert(checkPerfectNumber(1) === false);
  assert(checkPerfectNumber(0) === false);
});
