import { TreeNode } from "../utilities/TreeNode";

// 572. Subtree of Another Tree
// https://leetcode.com/problems/subtree-of-another-tree/
export default function isSubtree<T = number>(
  s: TreeNode<T> | null,
  t: TreeNode<T> | null
): boolean {
  return s === null
    ? s === t
    : isSameTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
}

function isSameTree<T>(s: TreeNode<T> | null, t: TreeNode<T> | null): boolean {
  if (s === null && t === null) return true;

  if (s !== null && t !== null)
    return (
      s.val === t.val &&
      isSameTree(s.left, t.left) &&
      isSameTree(s.right, t.right)
    );

  return false;
}
