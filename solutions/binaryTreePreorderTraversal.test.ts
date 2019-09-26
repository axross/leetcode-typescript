import { createBinaryTreeNode } from "../utilities/TreeNode";
import preorderTraversal from "./binaryTreePreorderTraversal";

describe("144. Binary Tree Preorder Traversal", () => {
  const TEST_CASES = new Map([
    [[1, null, 2, 3], [1, 2, 3]],
    [[4, 4, 5, 1, 2], [4, 4, 1, 2, 5]],
    [
      [1, null, 1, null, 1, null, 1, null, 1, null, 1, 2],
      [1, 1, 1, 1, 1, 1, 2]
    ],
    [[1], [1]],
    [[], []]
  ]);

  for (const [tree, expected] of TEST_CASES) {
    it(`returns [${expected}] when called with [${tree}]`, () => {
      expect(preorderTraversal(createBinaryTreeNode(tree))).toEqual(expected);
    });
  }
});
