import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import isMatch from "./regular_expression_matching.ts";

test("10. Regular Expression Matching", () => {
  assertStrictEq(isMatch("aa", "a"), false);
  assertStrictEq(isMatch("aa", "a*"), true);
  assertStrictEq(isMatch("ab", ".*"), true);
  assertStrictEq(isMatch("aab", "c*a*b"), true);
  assertStrictEq(isMatch("mississippi", "mis*is*p*."), false);
  assertStrictEq(isMatch("ab", ".*c"), false);
  assertStrictEq(isMatch("aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*a*a*a*b"), true);
  assertStrictEq(isMatch("ab", ".*.."), true);
});
