import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import longestCommonPrefix from "./longest_common_prefix.ts";

test("14. Longest Common Prefix", () => {
  assert(longestCommonPrefix(["flower", "flow", "flight"]) === "fl");
  assert(longestCommonPrefix(["dog", "racecar", "car"]) === "");
  assert(longestCommonPrefix(["aca", "cba"]) === "");
  assert(longestCommonPrefix([""]) === "");
  assert(longestCommonPrefix(["a"]) === "a");
  assert(longestCommonPrefix(["a", "b"]) === "");
});
