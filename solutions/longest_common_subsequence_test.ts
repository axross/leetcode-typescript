import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import longestCommonSubsequence from "./longest_common_subsequence.ts";

test("1143. Longest Common Subsequence", () => {
  assertStrictEq(longestCommonSubsequence("abcde", "ace"), 3);
  assertStrictEq(longestCommonSubsequence("abc", "abc"), 3);
  assertStrictEq(longestCommonSubsequence("abc", "def"), 0);
});
