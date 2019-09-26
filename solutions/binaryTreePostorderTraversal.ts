import { TreeNode } from "../utilities/TreeNode";

// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/
export default function postorderTraversal<T>(root: TreeNode<T> | null): T[] {
  const history: T[] = [];

  function traverse(node: TreeNode<T> | null): void {
    if (node === null) return;

    traverse(node.left);
    traverse(node.right);

    history.push(node.val);
  }

  traverse(root);

  return history;
}
