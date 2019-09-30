import { TreeNode } from "../utilities/TreeNode";

// 111. Minimum Depth of Binary Tree
// https://leetcode.com/problems/minimum-depth-of-binary-tree/
export default function minDepth<T>(node: TreeNode<T> | null) {
  const queue: [TreeNode<T> | null, number][] = [[node, 1]];

  while (queue.length > 0) {
    const [node, depth] = queue.shift()!;

    if (node === null) continue;
    if (!node.left && !node.right) return depth;

    queue.push([node.left, depth + 1]);
    queue.push([node.right, depth + 1]);
  }

  return 0;
}
