import { createBinaryTreeNode } from "../testUtilities/BinaryTree";
import maxDepth from "./maximumDepthOfBinaryTree";

describe("104. Maximum Depth of Binary Tree", () => {
  const TEST_CASES = new Map([[[3, 9, 20, null, null, 15, 7], 3], [[], 0]]);

  for (const [values, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${values}]`, () => {
      expect(maxDepth(createBinaryTreeNode(values))).toBe(expected);
    });
  }
});
