import { TreeNode } from "../utilities/TreeNode";

// 144. Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/
export default function preorderTraversal<T>(root: TreeNode<T> | null): T[] {
  const history: T[] = [];
  const stack: (TreeNode<T> | null)[] = [root];

  while (stack.length >= 1) {
    const node = stack.pop();

    if (!node) continue;

    history.push(node.val);

    stack.push(node.right);
    stack.push(node.left);
  }

  return history;
}
