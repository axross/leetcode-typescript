import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import searchRange from "./find_first_and_last_position_of_element_in_sorted_array.ts";

test("34. Find First and Last Position of Element in Sorted Array", () => {
  assertEquals(searchRange([5, 7, 7, 8, 8, 10], 8), [3, 4]);
  assertEquals(searchRange([5, 7, 7, 8, 8, 10], 6), [-1, -1]);
  assertEquals(searchRange([2, 2], 2), [0, 1]);
});
