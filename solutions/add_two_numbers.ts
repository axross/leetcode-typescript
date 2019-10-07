import { SinglyLinkedListNode } from '../types/linked_list.ts';

// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/
export default function addTwoNumbers(nodeA: SinglyLinkedListNode<number>, nodeB: SinglyLinkedListNode<number>) {
  if (!nodeA || !nodeB) return nodeA ?? nodeB ?? null;

  const sum = nodeA.val + nodeB.val;
  const node = { val: sum % 10, next: null };
  node.next = addTwoNumbers(nodeA.next, nodeB.next);

  if (sum >= 10) {
    node.next = addTwoNumbers(node.next, { val: 1, next: null });
  }

  return node;
}
