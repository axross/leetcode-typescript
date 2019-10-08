import { BinaryTreeNode } from "../data_structures/binary_tree.ts";

// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/
export default function inorderTraversal<T>(
  root: BinaryTreeNode<T> | null
): T[] {
  const history: T[] = [];

  function traverse(node: BinaryTreeNode<T> | null): void {
    if (node === null) return;

    traverse(node.left);

    history.push(node.val);

    traverse(node.right);
  }

  traverse(root);

  return history;
}
