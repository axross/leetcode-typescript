import { createSinglyLinkedListNode } from "../testUtilities/LinkedList";
import mergeTwoLists from "./mergeTwoLists";

describe("21. Merge Two Sorted Lists", () => {
  const TEST_CASES = new Map([
    [[[1, 2, 4], [1, 3, 4]], [1, 1, 2, 3, 4, 4]],
    [[[], []], []]
  ]);

  for (const [[list1, list2], expected] of TEST_CASES) {
    it(`returns [${expected}] when called with [${list1}] and [${list2}]`, () => {
      expect(
        mergeTwoLists(
          createSinglyLinkedListNode(list1),
          createSinglyLinkedListNode(list2)
        )
      ).toEqual(createSinglyLinkedListNode(expected));
    });
  }
});
