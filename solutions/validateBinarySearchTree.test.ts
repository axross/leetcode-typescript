import { createBinaryTreeNode } from "../utilities/TreeNode";
import isValidBST from "./validateBinarySearchTree";

describe("98. Validate Binary Search Tree", () => {
  test("#1", () => {
    expect(isValidBST(createBinaryTreeNode([2, 1, 3]))).toBe(true);
  });

  test("#2", () => {
    expect(isValidBST(createBinaryTreeNode([5, 1, 4, null, null, 3, 6]))).toBe(
      false
    );
  });

  test("#3", () => {
    expect(isValidBST(createBinaryTreeNode([1, 1]))).toBe(false);
  });

  test("#4", () => {
    expect(isValidBST(createBinaryTreeNode([]))).toBe(true);
  });
});
