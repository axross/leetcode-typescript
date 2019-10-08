import { test } from "https://deno.land/std/testing/mod.ts";
import {
  assert,
  assertStrictEq
} from "https://deno.land/std/testing/asserts.ts";
import longestPalindrome from "./longest_palindromic_substring.ts";

test("5. Longest Palindromic Substring", () => {
  assert(["bab", "aba"].includes(longestPalindrome("babad")));
  assertStrictEq(longestPalindrome("cbbd"), "bb");
});
