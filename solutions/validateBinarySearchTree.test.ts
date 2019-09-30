import { createBinaryTreeNode } from "../testUtilities/BinaryTree";
import isValidBST from "./validateBinarySearchTree";

describe("98. Validate Binary Search Tree", () => {
  const TEST_CASES = new Map([
    [[2, 1, 3], true],
    [[5, 1, 4, null, null, 3, 6], false],
    [[1, 1], false],
    [[], true]
  ]);

  for (const [values, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${values}]`, () => {
      expect(isValidBST(createBinaryTreeNode(values))).toBe(expected);
    });
  }
});
