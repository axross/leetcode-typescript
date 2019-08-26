import { TreeNode } from "../utilities/TreeNode";

// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
export default function maxDepth<T>(node: TreeNode<T> | null): number {
  return node === null
    ? 0
    : Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}
