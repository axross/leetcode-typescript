// 746. Min Cost Climbing Stairs
// https://leetcode.com/problems/min-cost-climbing-stairs/
export default function minCostClimbingStairs(costs: number[]): number {
  // this is dynamic programming.
  // see https://github.com/axross/leetcode-typescript/pull/58
  const dp = new Map([[-2, 0], [-1, 0]]);

  for (let i = 0; i <= costs.length; ++i) {
    dp.set(i, Math.min(dp.get(i - 2)!, dp.get(i - 1)!) + (costs[i] || 0));
  }

  return dp.get(costs.length)!;
}
