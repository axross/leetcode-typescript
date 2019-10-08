import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import searchInsert from "./search_insert_position.ts";

test("35. Search Insert Position", () => {
  assertStrictEq(searchInsert([1, 3, 5, 6], 5), 2);
  assertStrictEq(searchInsert([1, 3, 5, 6], 2), 1);
  assertStrictEq(searchInsert([1, 3, 5, 6], 7), 4);
  assertStrictEq(searchInsert([1, 3, 5, 6], 0), 0);
});
