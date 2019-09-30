import { BinaryTreeNode } from "../types/BinaryTree";

// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/
function isSymmetric<T>(node: BinaryTreeNode<T> | null): boolean {
  // check recursively for each outside-elements
  function isEqual<T>(
    node1: BinaryTreeNode<T> | null,
    node2: BinaryTreeNode<T> | null
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

export default isSymmetric;
