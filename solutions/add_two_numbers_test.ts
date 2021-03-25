import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { createSinglyLinkedListNode } from '../test_utilities/linked_list.ts';
import addTwoNumbers from "./add_two_numbers.ts";

test("2. Add Two Numbers", () => {
  assertEquals(addTwoNumbers(createSinglyLinkedListNode([2,4,3]), createSinglyLinkedListNode([5,6,4])), createSinglyLinkedListNode([7,0,8]));
  assertEquals(addTwoNumbers(createSinglyLinkedListNode([9,9,9]), createSinglyLinkedListNode([1])), createSinglyLinkedListNode([0,0,0,1]));
  assertEquals(addTwoNumbers(createSinglyLinkedListNode([1]), createSinglyLinkedListNode([1])), createSinglyLinkedListNode([2]));
});
