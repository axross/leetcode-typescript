// 198. House Robber
// https://leetcode.com/problems/house-robber/
export default function rob(nums: number[]): number {
  // this is dynamic programming.
  // see https://github.com/axross/leetcode-typescript/pull/55
  const dp = new Map([[-1, 0], [0, 0]]);

  for (let i = 1; i <= nums.length; ++i) {
    // reference memoized results and decide next one
    dp.set(i, Math.max(dp.get(i - 1)!, dp.get(i - 2)! + nums[i - 1]));
  }

  // dp[nums.length] is the maximum amount
  return dp.get(nums.length)!;
}
