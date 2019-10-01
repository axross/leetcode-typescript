import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import findMin from "./find_minimum_in_rotated_sorted_array.ts";

test("153. Find Minimum in Rotated Sorted Array", () => {
  assert(findMin([3, 4, 5, 1, 2]) === 1);
  assert(findMin([4, 5, 6, 7, 0, 1, 2]) === 0);
  assert(findMin([3, 1, 2]) === 1);
  assert(findMin([1, 2, 3, 4, 5, 6]) === 1);
  assert(findMin([2, 1]) === 1);
  assert(findMin([1]) === 1);
});
