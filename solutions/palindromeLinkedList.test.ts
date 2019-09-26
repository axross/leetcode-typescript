import { createListNode } from "../utilities/ListNode";
import isPalindrome from "./palindromeLinkedList";

describe("234. Palindrome Linked List", () => {
  const TEST_CASES = new Map([
    [[1, 2], false],
    [[1, 2, 2, 1], true],
    [[1, 2, 1, 3, 1, 2, 1], true],
    [[1, 2, 1, 3, 1, 3, 1], false]
  ]);

  for (const [values, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${values}]`, () => {
      expect(isPalindrome(createListNode(values))).toBe(expected);
    });
  }
});
