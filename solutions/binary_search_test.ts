import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import search from "./binary_search.ts";

test("704. Binary Search", () => {
  assertStrictEq(search([-1, 0, 3, 5, 9, 12], 9), 4);
  assertStrictEq(search([-1, 0, 3, 5, 9, 12], 13), -1);
});
