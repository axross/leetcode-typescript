// 256. Paint House
// https://leetcode.com/problems/paint-house/
export default function minCost(costs: [number, number, number][]): number {
  // this is dynamic programming.
  // see https://github.com/axross/leetcode-typescript/pull/56
  const dp = new Map<number, [number, number, number]>([[-1, [0, 0, 0]]]);

  for (let i = 0; i < costs.length; ++i) {
    const previousMinimumCosts = dp.get(i - 1)!;

    dp.set(i, [
      costs[i][0] + Math.min(previousMinimumCosts[1], previousMinimumCosts[2]),
      costs[i][1] + Math.min(previousMinimumCosts[0], previousMinimumCosts[2]),
      costs[i][2] + Math.min(previousMinimumCosts[0], previousMinimumCosts[1])
    ]);
  }

  // the minimum value in the end is the minimum cost
  return Math.min(...dp.get(costs.length - 1)!);
}
