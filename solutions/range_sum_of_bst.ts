import { BinaryTreeNode } from "../data_structures/binary_tree.ts";

// 938. Range Sum of BST
// https://leetcode.com/problems/range-sum-of-bst/
export default function rangeSumBST(
  node: BinaryTreeNode<number> | null,
  L: number,
  R: number
): number {
  if (!node) return 0;

  const leftSum = node.val > L ? rangeSumBST(node.left, L, R) : 0;
  const rightSum = node.val < R ? rangeSumBST(node.right, L, R) : 0;
  const self = node.val >= L && node.val <= R ? node.val : 0;

  return leftSum + self + rightSum;
}
