import { LinkedListNode } from "../data_structures/linked_list.ts";

// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
export default function mergeTwoLists<T>(
  list1: LinkedListNode<T> | null,
  list2: LinkedListNode<T> | null
): LinkedListNode<T> | null {
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
