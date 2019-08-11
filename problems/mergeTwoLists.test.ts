import { createListNode } from "../utilities/ListNode";
import mergeTwoLists from "./mergeTwoLists";

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
