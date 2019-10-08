import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import {
  createLinkedListNode,
  getNthNode
} from "../data_structures/linked_list.ts";
import getIntersectionNode from "./intersection_of_two_linked_lists.ts";

test("160. Intersection of Two Linked Lists", () => {
  const headA1 = createLinkedListNode([4, 1, 8, 4, 5]);
  const headB1 = createLinkedListNode([5, 0, 1, 8, 4, 5]);
  const intersection1 = getNthNode(headA1!, 2);

  getNthNode(headB1!, 2).next = intersection1;

  assertStrictEq(getIntersectionNode(headA1, headB1), intersection1);

  const headA2 = createLinkedListNode([0, 9, 1, 2, 4]);
  const headB2 = createLinkedListNode([3, 2, 4]);
  const intersection2 = getNthNode(headA2!, 3);

  getNthNode(headB2!, 0).next = intersection2;

  assertStrictEq(getIntersectionNode(headA1, headB1), intersection1);

  const headA3 = createLinkedListNode([2, 6, 4]);
  const headB3 = createLinkedListNode([1, 5]);

  assertStrictEq(getIntersectionNode(headA3, headB3), null);
});
