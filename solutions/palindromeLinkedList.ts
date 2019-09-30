import { SinglyLinkedListNode } from "../types/LinkedList";

// 234. Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/
export default function isPalindrome<T>(
  node: SinglyLinkedListNode<T> | null
): boolean {
  let left = node;

  function traverse(right: SinglyLinkedListNode<T> | null): boolean {
    if (right === null) return true;

    const isNextMightBePalindrome = traverse(right.next);
    const isThisMightBePalindrome = left === null || right.val === left.val;

    if (left !== null) {
      left = left.next;
    }

    return isNextMightBePalindrome && isThisMightBePalindrome;
  }

  return traverse(node);
}
