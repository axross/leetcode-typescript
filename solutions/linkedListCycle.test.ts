import {
  createSinglyLinkedListNode,
  getNthNode
} from "../testUtilities/LinkedList";
import hasCycle from "./linkedListCycle";

describe("141. Linked List Cycle", () => {
  const TEST_CASES = new Map<[number[], number], boolean>([
    [[[3, 2, 0, -4], 1], true],
    [[[3, 2, 0, -4], -1], false],
    [[[3, 2, 0, -4], 3], true]
  ]);

  for (const [[values, cycleStart], expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${values}] ${
      cycleStart === -1 ? "(no cycle)" : `(cycle starts from ${cycleStart})`
    }`, () => {
      const head = createSinglyLinkedListNode(values)!;

      if (cycleStart !== -1) {
        getNthNode(head, -1).next = getNthNode(head, cycleStart);
      }

      expect(hasCycle(head)).toBe(expected);
    });
  }
});
