import { SinglyLinkedListNode } from "../types/linked_list.ts";

// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
export default function mergeTwoLists<T>(
  list1: SinglyLinkedListNode<T> | null,
  list2: SinglyLinkedListNode<T> | null
): SinglyLinkedListNode<T> | null {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);

    return list1;
  }

  list2.next = mergeTwoLists(list1, list2.next);

  return list2;
}
