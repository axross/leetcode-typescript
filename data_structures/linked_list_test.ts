import { test } from "https://deno.land/std/testing/mod.ts";
import {
  assertEquals,
  assertStrictEq,
  assertThrows
} from "https://deno.land/std/testing/asserts.ts";
import { createLinkedListNode, getNthNode } from "./linked_list.ts";

test("createLinkedListNode() returns a LinkedListNode by the given array", () => {
  assertEquals(createLinkedListNode([1, 2, 3, 4, 5, 6, 7]), {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 6,
              next: {
                val: 7,
                next: null
              }
            }
          }
        }
      }
    }
  });
  assertEquals(createLinkedListNode([1]), {
    val: 1,
    next: null
  });
});

test("createLinkedListNode() returns null if the given array is empty", () => {
  assertStrictEq(createLinkedListNode([]), null);
});

test("getNthNode(node, n) returns the n-th node", () => {
  assertStrictEq(
    getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, 0).val,
    0
  );
  assertStrictEq(
    getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, 2).val,
    2
  );
  assertStrictEq(
    getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, -1).val,
    5
  );
  assertStrictEq(
    getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, -3).val,
    3
  );
});

test("getNthNode(node, n) doesn't mutates the given linked list", () => {
  const head = createLinkedListNode([0, 1, 2, 3, 4, 5])!;

  getNthNode(head, 1);
  getNthNode(head, 2);
  getNthNode(head, 3);

  assertStrictEq(getNthNode(head, 2).val, 2);
});

test("getNthNode(node, n) throws an Error if the given index is out of bounds", () => {
  assertThrows(
    () => getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, 7),
    Error
  );
  assertThrows(
    () => getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, -7),
    Error
  );
});

test("getNthNode(node, n) throws a TypeError if the given index is not an integer", () => {
  assertThrows(
    () => getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, 1.1),
    TypeError
  );
  assertThrows(
    () => getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, Infinity),
    TypeError
  );
  assertThrows(
    () => getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, -Infinity),
    TypeError
  );
  assertThrows(
    () => getNthNode(createLinkedListNode([0, 1, 2, 3, 4, 5])!, NaN),
    TypeError
  );
});
