// 198. House Robber
// https://leetcode.com/problems/house-robber/
function rob(nums: number[]): number {
  // this problem can be solved with dynamic programming
  //
  // for example when the nums is [2, 4, 9, 3, 1, 5], recurrence relation is:
  //
  // dp[-1] = 0
  // dp[0] = 0
  // dp[i] = max(dp[i - 1], dp[i - 2] + nums[i - 1])
  //
  // dp table is:
  //
  //  -1   0   1   2   3   4   5   6
  //   0   0   2   4  11  11  12  16
  //
  // so, initialize dp table that dp[-1] = 0 and dp[0] = 0
  const dp = new Map([[-1, 0], [0, 0]]);

  for (let i = 1; i <= nums.length; ++i) {
    // reference memoized results and decide next one
    dp.set(i, Math.max(dp.get(i - 1)!, dp.get(i - 2)! + nums[i - 1]));
  }

  // dp[nums.length] is the maximum amount
  return dp.get(nums.length)!;
}

export default rob;
