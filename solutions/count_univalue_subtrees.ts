import { BinaryTreeNode } from "../data_structures/binary_tree.ts";

// 250. Count Univalue Subtrees
// https://leetcode.com/problems/count-univalue-subtrees/
export default function countUnivalSubtrees(
  root: BinaryTreeNode<number> | null
): number {
  function traverse(
    node: BinaryTreeNode<number> | null
  ): [number, number | null] {
    if (node === null) return [0, null];

    let [leftCount, leftValue] = traverse(node.left);
    let [rightCount, rightValue] = traverse(node.right);

    return (leftValue === node.val || leftValue === null) &&
      (rightValue === node.val || rightValue === null)
      ? [leftCount + rightCount + 1, node.val]
      : [leftCount + rightCount, NaN];
  }

  return traverse(root)[0];
}
