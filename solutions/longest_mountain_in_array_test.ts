import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import longestMountain from "./longest_mountain_in_array.ts";

test("845. Longest Mountain in Array", () => {
  assert(longestMountain([2, 1, 4, 7, 3, 2, 5]) === 5);
  assert(longestMountain([0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]) === 11);
  assert(longestMountain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) === 0);
  assert(longestMountain([1, 1, 0, 0, 1, 0]) === 3);
  assert(longestMountain([2, 3, 3, 2, 0, 2]) === 0);
});
