import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import { createSinglyLinkedListNode } from "../test_utilities/linked_list.ts";
import isPalindrome from "./palindrome_linked_list.ts";

test("234. Palindrome Linked List", () => {
  assert(isPalindrome(createSinglyLinkedListNode([1, 2])) === false);
  assert(isPalindrome(createSinglyLinkedListNode([1, 2, 2, 1])) === true);
  assert(
    isPalindrome(createSinglyLinkedListNode([1, 2, 1, 3, 1, 2, 1])) === true
  );
  assert(
    isPalindrome(createSinglyLinkedListNode([1, 2, 1, 3, 1, 3, 1])) === false
  );
});
