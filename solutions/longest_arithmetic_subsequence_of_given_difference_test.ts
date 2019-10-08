import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import longestSubsequence from "./longest_arithmetic_subsequence_of_given_difference.ts";

test("1218. Longest Arithmetic Subsequence of Given Difference", () => {
  assertStrictEq(longestSubsequence([1, 2, 3, 4], 1), 4);
  assertStrictEq(longestSubsequence([1, 3, 5, 7], 1), 1);
  assertStrictEq(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2), 4);
  assertStrictEq(longestSubsequence([1], 1), 1);
});
