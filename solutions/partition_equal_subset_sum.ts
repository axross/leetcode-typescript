// 416. Partition Equal Subset Sum
// https://leetcode.com/problems/partition-equal-subset-sum/
export default function canPartition(nums: number[]): boolean {
  const total = nums.reduce((total, num) => total + num, 0);

  if (total % 2 !== 0) return false;

  const target = total / 2;
  const dp = new Array(total + 1).fill(false);

  dp[0] = true;

  for (const num of nums) {
    if (dp[target - num]) return true;

    for (let i = target; i >= num; --i) {
      dp[i] = dp[i - num];
    }
  }

  return false;
}
