import { SinglyLinkedListNode } from "../types/LinkedList";

// 160. Intersection of Two Linked Lists
// https://leetcode.com/problems/intersection-of-two-linked-lists/
export default function getIntersectionNode<T>(
  headA: SinglyLinkedListNode<T> | null,
  headB: SinglyLinkedListNode<T> | null
): SinglyLinkedListNode<T> | null {
  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a;
}
