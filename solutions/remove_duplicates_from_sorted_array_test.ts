import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import removeDuplicates from "./remove_duplicates_from_sorted_array.ts";

test("26. Remove Duplicates from Sorted Array", () => {
  assertEquals(removeDuplicates([1, 1, 2]), 2);
  assertEquals(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5);
  assertEquals(removeDuplicates([]), 0);
});
