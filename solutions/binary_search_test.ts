import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import search from "./binary_search.ts";

test("704. Binary Search", () => {
  assert(search([-1, 0, 3, 5, 9, 12], 9) === 4);
  assert(search([-1, 0, 3, 5, 9, 12], 13) === -1);
});
