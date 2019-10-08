import { LinkedListNode } from "../data_structures/linked_list.ts";

// 160. Intersection of Two Linked Lists
// https://leetcode.com/problems/intersection-of-two-linked-lists/
export default function getIntersectionNode<T>(
  headA: LinkedListNode<T> | null,
  headB: LinkedListNode<T> | null
): LinkedListNode<T> | null {
  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a;
}
