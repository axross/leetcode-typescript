import { SinglyLinkedListNode } from "../types/LinkedList";

// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/
export default function hasCycle<T>(
  head: SinglyLinkedListNode<T> | null
): boolean {
  function traverse(
    previous: SinglyLinkedListNode<T> | null,
    node: SinglyLinkedListNode<T> | null
  ): boolean {
    if (node === null) return false;
    if (node === head && previous !== null) return true;

    const next = node.next;

    node.next = previous;

    return traverse(node, next);
  }

  return traverse(null, head);
}
