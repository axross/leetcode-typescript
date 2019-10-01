import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import isPalindrome from "./valid_palindrome.ts";

test("125. Valid Palindrome", () => {
  assert(isPalindrome("A man, a plan, a canal: Panama") === true);
  assert(isPalindrome("race a car") === false);
  assert(isPalindrome("") === true);
  assert(isPalindrome("0P") === false);
});
