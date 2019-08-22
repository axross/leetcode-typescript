import { TreeNode } from "../utilities/TreeNode";

// 543. Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/
export default function diameterOfBinaryTree<T>(
  node: TreeNode<T> | null
): number {
  function getHeightAndDiameter(node: TreeNode<T> | null): [number, number] {
    if (node === null) return [-1, -1];

    const [leftHeight, leftDiameter] = getHeightAndDiameter(node.left);
    const [rightHeight, rightDiameter] = getHeightAndDiameter(node.right);

    return [
      Math.max(leftHeight, rightHeight) + 1,
      Math.max(leftHeight + rightHeight + 2, leftDiameter, rightDiameter)
    ];
  }

  if (!node) return 0;

  return getHeightAndDiameter(node)[1];
}
