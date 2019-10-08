import { BinaryTreeNode } from "../data_structures/binary_tree.ts";

// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/
export default function levelOrder<T>(root: BinaryTreeNode<T> | null): T[][] {
  const valuesEachLevel: T[][] = [];

  function traverse(node: BinaryTreeNode<T> | null, level: number) {
    if (node === null) return;

    if (valuesEachLevel[level]) {
      valuesEachLevel[level].push(node.val);
    } else {
      valuesEachLevel[level] = [node.val];
    }

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 0);

  return valuesEachLevel;
}
