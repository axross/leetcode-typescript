import { ListNode } from "../utilities/ListNode";

// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
function reverseList<T>(head: ListNode<T> | null): ListNode<T> | null {
  if (head === null || head.next === null) return head;

  // call itself recursively with next node as the new head:  [1, 2, 3] -> [2, 3] -> [3]
  const newHead = reverseList(head.next);

  // swap first two nodes
  head.next.next = head;
  head.next = null;

  return newHead;
}

export default reverseList;
