import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import isPalindrome from "./valid_palindrome.ts";

test("125. Valid Palindrome", () => {
  assertStrictEq(isPalindrome("A man, a plan, a canal: Panama"), true);
  assertStrictEq(isPalindrome("race a car"), false);
  assertStrictEq(isPalindrome(""), true);
  assertStrictEq(isPalindrome("0P"), false);
});
