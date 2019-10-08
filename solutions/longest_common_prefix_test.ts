import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import longestCommonPrefix from "./longest_common_prefix.ts";

test("14. Longest Common Prefix", () => {
  assertStrictEq(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
  assertStrictEq(longestCommonPrefix(["dog", "racecar", "car"]), "");
  assertStrictEq(longestCommonPrefix(["aca", "cba"]), "");
  assertStrictEq(longestCommonPrefix([""]), "");
  assertStrictEq(longestCommonPrefix(["a"]), "a");
  assertStrictEq(longestCommonPrefix(["a", "b"]), "");
});
