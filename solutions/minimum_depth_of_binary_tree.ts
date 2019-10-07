import { BinaryTreeNode } from "../types/binary_tree.ts";

// 111. Minimum Depth of Binary Tree
// https://leetcode.com/problems/minimum-depth-of-binary-tree/
export default function minDepth<T>(node: BinaryTreeNode<T> | null) {
  const queue: [BinaryTreeNode<T> | null, number][] = [[node, 1]];

  while (queue.length > 0) {
    const [node, depth] = queue.shift()!;

    if (node === null) continue;
    if (!node.left && !node.right) return depth;

    queue.push([node.left, depth + 1]);
    queue.push([node.right, depth + 1]);
  }

  return 0;
}
