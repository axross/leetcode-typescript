import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findClosestElements from "./find_k_closest_elements.ts";

test("658. Find K Closest Elements", () => {
  assertEquals(findClosestElements([1, 2, 3, 4, 5], 4, 3), [1, 2, 3, 4]);
  assertEquals(findClosestElements([1, 2, 3, 4, 5], 4, -1), [1, 2, 3, 4]);
  assertEquals(findClosestElements([1, 2], 1, 1), [1]);
  assertEquals(findClosestElements([1, 3, 3, 4, 5, 7, 7, 8, 8, 8], 6, 6), [
    4,
    5,
    7,
    7,
    8,
    8
  ]);
});
