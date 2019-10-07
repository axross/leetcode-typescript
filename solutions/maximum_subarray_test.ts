import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import maxSubArray from "./maximum_subarray.ts";

test("53. Maximum Subarray", () => {
  assert(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
  assert(maxSubArray([-3, -2, -5, -1, -4, -1]) === -1);
});
