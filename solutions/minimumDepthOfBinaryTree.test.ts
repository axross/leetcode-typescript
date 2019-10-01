import { createBinaryTreeNode } from "../testUtilities/BinaryTree";
import minDepth from "./minimumDepthOfBinaryTree";

describe("111. Minimum Depth of Binary Tree", () => {
  const TEST_CASES = new Map([
    [[3, 9, 20, null, null, 15, 7], 2],
    [[1, 2], 2],
    [[1, null, 2, null, 2], 3],
    [[1], 1],
    [[], 0]
  ]);

  for (const [values, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${values}]`, () => {
      expect(minDepth(createBinaryTreeNode(values))).toBe(expected);
    });
  }
});
