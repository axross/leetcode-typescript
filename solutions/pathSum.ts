import { TreeNode } from "../utilities/TreeNode";

// 112. Path Sum
// https://leetcode.com/problems/path-sum/
export default function hasPathSum(
  root: TreeNode<number> | null,
  sum: number
): boolean {
  // ⚠️ as following the test cases, we need to return false for hasPathSum(null, 0)
  //    so it cannot be just `if (root === null) return sum === 0`
  if (root === null) return false;
  if (root.left === null && root.right === null) return root.val === sum;

  // subtract self value and check the the leaf's value matches with sum
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
}
