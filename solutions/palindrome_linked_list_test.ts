import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import { createLinkedListNode } from "../data_structures/linked_list.ts";
import isPalindrome from "./palindrome_linked_list.ts";

test("234. Palindrome Linked List", () => {
  assertStrictEq(isPalindrome(createLinkedListNode([1, 2])), false);
  assertStrictEq(isPalindrome(createLinkedListNode([1, 2, 2, 1])), true);
  assertStrictEq(
    isPalindrome(createLinkedListNode([1, 2, 1, 3, 1, 2, 1])),
    true
  );
  assertStrictEq(
    isPalindrome(createLinkedListNode([1, 2, 1, 3, 1, 3, 1])),
    false
  );
});
