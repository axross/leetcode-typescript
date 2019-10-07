import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { createSinglyLinkedListNode } from "../test_utilities/linked_list.ts";
import reverseList from "./reverse_linked_list.ts";

test("206. Reverse Linked List", () => {
  assertEquals(
    reverseList(createSinglyLinkedListNode([0, 1])),
    createSinglyLinkedListNode([1, 0])
  );
  assertEquals(
    reverseList(createSinglyLinkedListNode([0, 1, 2, 3])),
    createSinglyLinkedListNode([3, 2, 1, 0])
  );
  assertEquals(
    reverseList(createSinglyLinkedListNode([0])),
    createSinglyLinkedListNode([0])
  );
  assertEquals(
    reverseList(createSinglyLinkedListNode([])),
    createSinglyLinkedListNode([])
  );
});
