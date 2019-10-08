import { BinaryTreeNode } from "../data_structures/binary_tree.ts";

// 222. Count Complete Tree Nodes
// https://leetcode.com/problems/count-complete-tree-nodes/
export default function countNodes(
  root: BinaryTreeNode<number> | null
): number {
  if (!root) return 0;

  const leftHeight = calculateHeight(root.left);
  const rightHeight = calculateHeight(root.right);

  return leftHeight === rightHeight
    ? // when left and right height is the same, the left subtree is perfect binary tree.
      // you only need to count up the right subtree, so do the same thing for the right one as a new root
      2 ** leftHeight + countNodes(root.right)
    : // otherwise, the right subtree is perfect binary tree
      // what you need to count up is only the left subtree
      2 ** rightHeight + countNodes(root.left);
}

function calculateHeight(root: BinaryTreeNode<number> | null): number {
  return root ? 1 + calculateHeight(root.left) : 0;
}
