import { createBinaryTreeNode } from "../utilities/TreeNode";
import inorderTraversal from "./binaryTreeInorderTraversal";

describe("94. Binary Tree Inorder Traversal", () => {
  const TEST_CASES = new Map([
    [[1, null, 2, 3], [1, 3, 2]],
    [[4, 4, 5, 1, 2], [1, 4, 2, 4, 5]],
    [
      [1, null, 1, null, 1, null, 1, null, 1, null, 1, 2],
      [1, 1, 1, 1, 1, 2, 1]
    ],
    [[1], [1]],
    [[], []]
  ]);

  for (const [tree, expected] of TEST_CASES) {
    it(`returns [${expected}] when called with [${tree}]`, () => {
      expect(inorderTraversal(createBinaryTreeNode(tree))).toEqual(expected);
    });
  }
});
