import { createBinaryTreeNode } from "../utilities/TreeNode";
import maxDepth from "./maximumDepthOfBinaryTree";

describe("104. Maximum Depth of Binary Tree", () => {
  test("#1", () => {
    expect(maxDepth(createBinaryTreeNode([3, 9, 20, null, null, 15, 7]))).toBe(
      3
    );
  });

  test("#2", () => {
    expect(maxDepth(createBinaryTreeNode([]))).toBe(0);
  });
});
