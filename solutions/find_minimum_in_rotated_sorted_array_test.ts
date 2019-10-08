import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import findMin from "./find_minimum_in_rotated_sorted_array.ts";

test("153. Find Minimum in Rotated Sorted Array", () => {
  assertStrictEq(findMin([3, 4, 5, 1, 2]), 1);
  assertStrictEq(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
  assertStrictEq(findMin([3, 1, 2]), 1);
  assertStrictEq(findMin([1, 2, 3, 4, 5, 6]), 1);
  assertStrictEq(findMin([2, 1]), 1);
  assertStrictEq(findMin([1]), 1);
});
