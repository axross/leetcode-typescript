import { createListNode } from "../utilities/ListNode";
import reverseList from "./reverseLinkedList";

describe("206. Reverse Linked List", () => {
  test("#1", () => {
    expect(reverseList(createListNode([0, 1]))).toEqual(createListNode([1, 0]));
  });

  test("#2", () => {
    expect(reverseList(createListNode([0, 1, 2, 3]))).toEqual(
      createListNode([3, 2, 1, 0])
    );
  });

  test("#3", () => {
    expect(reverseList(createListNode([0]))).toEqual(createListNode([0]));
  });

  test("#4", () => {
    expect(reverseList(null)).toEqual(null);
  });
});
