import { createSinglyLinkedListNode } from "../testUtilities/LinkedList";
import { SinglyLinkedListNode } from "../types/LinkedList";
import hasCycle from "./linkedListCycle";

describe("141. Linked List Cycle", () => {
  const TEST_CASES = new Map<[number[], number], boolean>([
    [[[3, 2, 0, -4], 1], true],
    [[[3, 2, 0, -4], -1], false],
    [[[3, 2, 0, -4], 3], true]
  ]);

  for (const [[values, cycleStart], expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${values}] (cycle starts from ${cycleStart})`, () => {
      const head = createSinglyLinkedListNode(values);

      let node = head;
      let cycleStartNode: SinglyLinkedListNode<number> | null = null;

      for (const i of values.keys()) {
        if (i === cycleStart) {
          cycleStartNode = node;
        }

        if (i === values.length - 1) {
          node!.next = cycleStartNode;
        }

        node = node!.next;
      }

      expect(hasCycle(head)).toBe(expected);
    });
  }
});
