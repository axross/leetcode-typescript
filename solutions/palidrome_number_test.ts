import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import isPalindrome from "./palidrome_number.ts";

test("9. Palindrome Number", () => {
  assert(isPalindrome(121) === true);
  assert(isPalindrome(-121) === false);
  assert(isPalindrome(5) === true);
  assert(isPalindrome(0) === true);
  assert(isPalindrome(10) === false);
  assert(isPalindrome(101) === true);
  assert(isPalindrome(1010) === false);
});
