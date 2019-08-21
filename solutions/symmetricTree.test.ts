import { createBinaryTreeNode } from "../utilities/TreeNode";
import isSymmetric from "./symmetricTree";

describe("101. Symmetric Tree", () => {
  test("#1", () => {
    expect(isSymmetric(createBinaryTreeNode([1, 2, 2, 3, 4, 4, 3]))).toBe(true);
  });

  test("#2", () => {
    expect(isSymmetric(createBinaryTreeNode([1, 2, 2, 3, null, 3, null]))).toBe(
      false
    );
  });

  test("#3", () => {
    expect(isSymmetric(createBinaryTreeNode([1, 2, 2, 3, null, null, 3]))).toBe(true);
  });

  test("#4", () => {
    expect(isSymmetric(createBinaryTreeNode([]))).toBe(true);
  });
});
