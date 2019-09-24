import { TreeNode } from "../utilities/TreeNode";

// 144. Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/
export default function preorderTraversal<T>(root: TreeNode<T> | null): T[] {
  const history: T[] = [];

  function traverse(node: TreeNode<T> | null): void {
    if (node === null) return;

    history.push(node.val);

    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);

  return history;
}
