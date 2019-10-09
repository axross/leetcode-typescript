import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import findLHS from "./longest_harmonious_subsequence.ts";

test("594. Longest Harmonious Subsequence", () => {
  assertStrictEq(findLHS([1, 3, 2, 2, 5, 2, 3, 7]), 5);
  assertStrictEq(findLHS([1, 3, 2, 3, 4, 2, 2, 4]), 5);
  assertStrictEq(findLHS([5, 4, 3, 2, 1]), 2);
  assertStrictEq(findLHS([1, 1, 1, 1]), 0);
  assertStrictEq(findLHS([2, 1]), 2);
  assertStrictEq(findLHS([1, 3]), 0);
  assertStrictEq(findLHS([0]), 0);
  assertStrictEq(findLHS([]), 0);
});
