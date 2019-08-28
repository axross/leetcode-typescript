import { TreeNode } from "../utilities/TreeNode";

// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/
export default function isValidBST(
  node: TreeNode<number> | null,
  greaterThan = -Infinity,
  lessThan = Infinity
): boolean {
  if (node === null) return true;

  return (
    node.val > greaterThan &&
    node.val < lessThan &&
    isValidBST(node.left, greaterThan, node.val) &&
    isValidBST(node.right, node.val, lessThan)
  );
}
