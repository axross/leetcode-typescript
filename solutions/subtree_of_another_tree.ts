import { BinaryTreeNode } from "../types/binary_tree.ts";

// 572. Subtree of Another Tree
// https://leetcode.com/problems/subtree-of-another-tree/
export default function isSubtree<T = number>(
  s: BinaryTreeNode<T> | null,
  t: BinaryTreeNode<T> | null
): boolean {
  return s === null
    ? s === t
    : isSameTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
}

function isSameTree<T>(
  s: BinaryTreeNode<T> | null,
  t: BinaryTreeNode<T> | null
): boolean {
  if (s === null && t === null) return true;

  if (s !== null && t !== null)
    return (
      s.val === t.val &&
      isSameTree(s.left, t.left) &&
      isSameTree(s.right, t.right)
    );

  return false;
}
