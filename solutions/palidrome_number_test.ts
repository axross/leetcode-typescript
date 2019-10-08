import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import isPalindrome from "./palidrome_number.ts";

test("9. Palindrome Number", () => {
  assertStrictEq(isPalindrome(121), true);
  assertStrictEq(isPalindrome(-121), false);
  assertStrictEq(isPalindrome(5), true);
  assertStrictEq(isPalindrome(0), true);
  assertStrictEq(isPalindrome(10), false);
  assertStrictEq(isPalindrome(101), true);
  assertStrictEq(isPalindrome(1010), false);
});
