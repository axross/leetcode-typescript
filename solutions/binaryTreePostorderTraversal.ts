import { BinaryTreeNode } from "../types/BinaryTree";

// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/
export default function postorderTraversal<T>(
  root: BinaryTreeNode<T> | null
): T[] {
  const history: T[] = [];

  function traverse(node: BinaryTreeNode<T> | null): void {
    if (node === null) return;

    traverse(node.left);
    traverse(node.right);

    history.push(node.val);
  }

  traverse(root);

  return history;
}
