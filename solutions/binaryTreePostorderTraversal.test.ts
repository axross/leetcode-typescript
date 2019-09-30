import { createBinaryTreeNode } from "../testUtilities/BinaryTree";
import postorderTraversal from "./binaryTreePostorderTraversal";

describe("145. Binary Tree Postorder Traversal", () => {
  const TEST_CASES = new Map([
    [[1, null, 2, 3], [3, 2, 1]],
    [[4, 4, 5, 1, 2], [1, 2, 4, 5, 4]],
    [
      [1, null, 1, null, 1, null, 1, null, 1, null, 1, 2],
      [2, 1, 1, 1, 1, 1, 1]
    ],
    [[1], [1]],
    [[], []]
  ]);

  for (const [tree, expected] of TEST_CASES) {
    it(`returns [${expected}] when called with [${tree}]`, () => {
      expect(postorderTraversal(createBinaryTreeNode(tree))).toEqual(expected);
    });
  }
});
