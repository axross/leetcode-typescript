import { ListNode } from "../utilities/ListNode";

// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
function mergeTwoLists<T>(
  list1: ListNode<T> | null,
  list2: ListNode<T> | null
): ListNode<T> | null {
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

export default mergeTwoLists;
