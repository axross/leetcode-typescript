import { createBinaryTreeNode } from "../testUtilities/BinaryTree";
import countNodes from "./countCompleteTreeNodes";

describe("222. Count Complete Tree Nodes", () => {
  const TEST_CASES = new Map([
    [[1, 2, 3, 4, 5, 6], 6],
    [[], 0],
    [[1, 2, 3, 4, 5, 6, 7, 8], 8],
    [[1, 2, 3, 4, 5, 6, 7], 7]
  ]);

  for (const [values, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${values}]`, () => {
      expect(countNodes(createBinaryTreeNode(values))).toBe(expected);
    });
  }
});
