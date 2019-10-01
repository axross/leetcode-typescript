import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import mySqrt from "./sqrtx.ts";

test("69. Sqrt(x)", () => {
  assert(mySqrt(16) === 4);
  assert(mySqrt(17) === 4);
  assert(mySqrt(15) === 3);
  assert(mySqrt(8) === 2);
  assert(mySqrt(1) === 1);
  assert(mySqrt(0) === 0);
  assert(mySqrt(Number.MAX_SAFE_INTEGER) === 94906265);
});
