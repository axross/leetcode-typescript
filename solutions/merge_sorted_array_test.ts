import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import merge from "./merge_sorted_array.ts";

test("88. Merge Sorted Array", () => {
  assertEquals(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), [1, 2, 2, 3, 5, 6]);
  assertEquals(merge([1, 2, 5, 0, 0, 0], 3, [3, 4, 6], 3), [1, 2, 3, 4, 5, 6]);
  assertEquals(merge([1, 2, 5, 0, 0, 0], 3, [3], 1), [1, 2, 3, 5]);
  assertEquals(merge([4, 0, 0, 0], 1, [1, 2, 3], 3), [1, 2, 3, 4]);
  assertEquals(merge([0, 0, 0], 0, [1, 2, 3], 3), [1, 2, 3]);
  assertEquals(merge([1, 2, 3], 3, [], 0), [1, 2, 3]);
  assertEquals(merge([], 0, [], 0), []);
});
