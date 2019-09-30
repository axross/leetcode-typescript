import {
  createSinglyLinkedListNode,
  getNthNode
} from "../testUtilities/LinkedList";
import { SinglyLinkedListNode } from "../types/LinkedList";
import getIntersectionNode from "./intersectionOfTwoLinkedLists";

describe("160. Intersection of Two Linked Lists", () => {
  const TEST_CASES: [any, number[], number[], number, number][] = [
    [8, [4, 1, 8, 4, 5], [5, 0, 1, 8, 4, 5], 2, 3],
    [2, [0, 9, 1, 2, 4], [3, 2, 4], 3, 1],
    [0, [2, 6, 4], [1, 5], 3, 2]
  ];

  for (const [, valuesA, valuesB, skipA, skipB] of TEST_CASES) {
    const headA = createSinglyLinkedListNode(valuesA);
    const headB = createSinglyLinkedListNode(valuesB);
    let intersection: SinglyLinkedListNode<number> | null = null;

    if (skipA < valuesA.length) {
      intersection = getNthNode(headA!, skipA);

      getNthNode(headB!, skipB - 1).next = intersection;
    }

    it(`returns the ${skipA}th node of "linked list A" when called with [${valuesA}], [${valuesB}], ${skipA} and ${skipB}`, () => {
      expect(getIntersectionNode(headA, headB)).toBe(intersection);
    });
  }
});
