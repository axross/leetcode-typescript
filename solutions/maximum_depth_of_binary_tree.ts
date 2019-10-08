import { BinaryTreeNode } from "../data_structures/binary_tree.ts";

// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
export default function maxDepth<T>(node: BinaryTreeNode<T> | null): number {
  return node === null
    ? 0
    : Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}
