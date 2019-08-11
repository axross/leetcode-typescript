import { createListNode, ListNode } from "../utilities/ListNode";

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

describe("21. Merge Two Sorted Lists", () => {
  test("#1", () => {
    expect(
      mergeTwoLists(createListNode([1, 2, 4]), createListNode([1, 3, 4]))
    ).toEqual(createListNode([1, 1, 2, 3, 4, 4]));
  });

  test("#2", () => {
    expect(mergeTwoLists(null, null)).toEqual(null);
  });
});
