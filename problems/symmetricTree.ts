import { createTreeNode, TreeNode } from "../utilities/TreeNode";

// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/
function isSymmetric<T>(node: TreeNode<T> | null): boolean {
  // check recursively for each outside-elements
  function isEqual<T>(
    node1: TreeNode<T> | null,
    node2: TreeNode<T> | null
  ): boolean {
    // if both are null
    if (!node1 && !node2) return true;

    // if both are not null
    if (node1 && node2) {
      // check their value and each children recursively
      return (
        node1.val === node2.val &&
        isEqual(node1.left, node2.right) &&
        isEqual(node1.right, node2.left)
      );
    }

    // if either is null
    return false;
  }

  // node is possibly null (the test case exists)
  if (!node) return true;

  return isEqual(node.left, node.right);
}

describe("101. Symmetric Tree", () => {
  test("#1", () => {
    expect(isSymmetric(createTreeNode([1, 2, 2, 3, 4, 4, 3]))).toBe(true);
  });

  test("#2", () => {
    expect(isSymmetric(createTreeNode([1, 2, 2, 3, null, 3, null]))).toBe(
      false
    );
  });

  test("#3", () => {
    expect(isSymmetric(createTreeNode([1, 2, 2, 3, null, null, 3]))).toBe(true);
  });

  test("#4", () => {
    expect(isSymmetric(null)).toBe(true);
  });
});
