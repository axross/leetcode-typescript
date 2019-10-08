import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import mySqrt from "./sqrtx.ts";

test("69. Sqrt(x)", () => {
  assertStrictEq(mySqrt(16), 4);
  assertStrictEq(mySqrt(17), 4);
  assertStrictEq(mySqrt(15), 3);
  assertStrictEq(mySqrt(8), 2);
  assertStrictEq(mySqrt(1), 1);
  assertStrictEq(mySqrt(0), 0);
  assertStrictEq(mySqrt(Number.MAX_SAFE_INTEGER), 94906265);
});
