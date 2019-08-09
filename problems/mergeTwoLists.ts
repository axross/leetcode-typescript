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

interface ListNode<T> {
  val: T;
  next: ListNode<T> | null;
}

describe("21. Merge Two Sorted Lists", () => {
  test("#1", () => {
    expect(
      mergeTwoLists(
        { val: 1, next: { val: 2, next: { val: 4, next: null } } },
        { val: 1, next: { val: 3, next: { val: 4, next: null } } }
      )
    ).toEqual({
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 4,
                next: null
              }
            }
          }
        }
      }
    });
  });

  test("#2", () => {
    expect(mergeTwoLists(null, null)).toEqual(null);
  });
});
