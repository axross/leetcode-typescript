import { BinaryTreeNode } from "../data_structures/binary_tree.ts";

// 129. Sum Root to Leaf Numbers
// https://leetcode.com/problems/sum-root-to-leaf-numbers/
export default function sumNumbers(
  root: BinaryTreeNode<number> | null
): number {
  return sumNumbersWithContext(root, 0);
}

function sumNumbersWithContext(
  node: BinaryTreeNode<number> | null,
  contextSum: number
): number {
  if (node === null) return 0;

  const hasChild = node.left !== null || node.right !== null;
  const sum = contextSum * 10 + node.val;

  if (!hasChild) return sum;

  return (
    sumNumbersWithContext(node.left, sum) +
    sumNumbersWithContext(node.right, sum)
  );
}
