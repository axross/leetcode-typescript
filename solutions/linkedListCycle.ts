import { SinglyLinkedListNode } from "../types/LinkedList";

// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/
export default function hasCycle<T>(
  head: SinglyLinkedListNode<T> | null
): boolean {
  let walker = head;
  let runner = head ? head.next : null;

  while (walker && runner) {
    if (walker && walker === runner) return true;

    walker = walker.next;
    runner = runner.next ? runner.next.next : null;
  }

  return false;
}
