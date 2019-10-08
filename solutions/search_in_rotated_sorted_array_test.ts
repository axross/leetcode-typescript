import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import search from "./search_in_rotated_sorted_array.ts";

test("33. Search in Rotated Sorted Array", () => {
  assertStrictEq(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
  assertStrictEq(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
  assertStrictEq(search([4, 5, 6, 7, 0, 1, 2], 4), 0);
  assertStrictEq(search([3, 1], 3), 0);
  assertStrictEq(search([7, 8, 1, 2, 3, 4, 5, 6], 2), 3);
});
