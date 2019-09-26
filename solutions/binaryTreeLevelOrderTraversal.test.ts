import { createBinaryTreeNode } from "../utilities/TreeNode";
import levelOrder from "./binaryTreeLevelOrderTraversal";

describe("102. Binary Tree Level Order Traversal", () => {
  const TEST_CASES = new Map([
    [[1, null, 2, 3], [[1], [2], [3]]],
    [[4, 4, 5, 1, 2], [[4], [4, 5], [1, 2]]],
    [
      [1, null, 1, null, 1, null, 1, null, 1, null, 1, 2],
      [[1], [1], [1], [1], [1], [1], [2]]
    ],
    [[1], [[1]]],
    [[], []]
  ]);

  for (const [tree, expected] of TEST_CASES) {
    it(`returns [${expected.map(
      level => `[${level}]`
    )}] when called with [${tree}]`, () => {
      expect(levelOrder(createBinaryTreeNode(tree))).toEqual(expected);
    });
  }
});
