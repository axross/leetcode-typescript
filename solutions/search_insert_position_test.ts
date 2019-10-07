import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import searchInsert from "./search_insert_position.ts";

test("35. Search Insert Position", () => {
  assert(searchInsert([1, 3, 5, 6], 5) === 2);
  assert(searchInsert([1, 3, 5, 6], 2) === 1);
  assert(searchInsert([1, 3, 5, 6], 7) === 4);
  assert(searchInsert([1, 3, 5, 6], 0) === 0);
});
