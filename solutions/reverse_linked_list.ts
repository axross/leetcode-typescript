import { LinkedListNode } from "../data_structures/linked_list.ts";

// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
export default function reverseList<T>(
  head: LinkedListNode<T> | null
): LinkedListNode<T> | null {
  if (head === null || head.next === null) return head;

  // call itself recursively with next node as the new head:  [1, 2, 3] -> [2, 3] -> [3]
  const newHead = reverseList(head.next);

  // swap first two nodes
  head.next.next = head;
  head.next = null;

  return newHead;
}
