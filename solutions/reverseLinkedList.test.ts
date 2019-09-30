import { createSinglyLinkedListNode } from "../testUtilities/LinkedList";
import reverseList from "./reverseLinkedList";

describe("206. Reverse Linked List", () => {
  const TEST_CASES = new Map([
    [[0, 1], [1, 0]],
    [[0, 1, 2, 3], [3, 2, 1, 0]],
    [[0], [0]],
    [[], []]
  ]);

  for (const [values, expected] of TEST_CASES) {
    it(`returns [${expected}] when called with [${values}]`, () => {
      expect(reverseList(createSinglyLinkedListNode(values))).toEqual(
        createSinglyLinkedListNode(expected)
      );
    });
  }
});
