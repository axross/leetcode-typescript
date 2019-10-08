import { LinkedListNode } from "../data_structures/linked_list.ts";

// 234. Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/
export default function isPalindrome<T>(
  node: LinkedListNode<T> | null
): boolean {
  let left = node;

  function traverse(right: LinkedListNode<T> | null): boolean {
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
