import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import {
  createSinglyLinkedListNode,
  getNthNode
} from "../test_utilities/linked_list.ts";
import getIntersectionNode from "./intersection_of_two_linked_lists.ts";

test("160. Intersection of Two Linked Lists", () => {
  const headA1 = createSinglyLinkedListNode([4, 1, 8, 4, 5]);
  const headB1 = createSinglyLinkedListNode([5, 0, 1, 8, 4, 5]);
  const intersection1 = getNthNode(headA1!, 2);

  getNthNode(headB1!, 2).next = intersection1;

  assertStrictEq(getIntersectionNode(headA1, headB1), intersection1);

  const headA2 = createSinglyLinkedListNode([0, 9, 1, 2, 4]);
  const headB2 = createSinglyLinkedListNode([3, 2, 4]);
  const intersection2 = getNthNode(headA2!, 3);

  getNthNode(headB2!, 0).next = intersection2;

  assertStrictEq(getIntersectionNode(headA1, headB1), intersection1);

  const headA3 = createSinglyLinkedListNode([2, 6, 4]);
  const headB3 = createSinglyLinkedListNode([1, 5]);

  assertStrictEq(getIntersectionNode(headA3, headB3), null);
});
