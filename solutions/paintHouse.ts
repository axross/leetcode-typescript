// 256. Paint House
// https://leetcode.com/problems/paint-house/
function minCost(costs: [number, number, number][]): number {
  const dp = new Map<number, [number, number, number]>([[-1, [0, 0, 0]]]);

  for (let i = 0; i < costs.length; ++i) {
    const previousMinimumCosts = dp.get(i - 1)!;

    dp.set(i, [
      costs[i][0] + Math.min(previousMinimumCosts[1], previousMinimumCosts[2]),
      costs[i][1] + Math.min(previousMinimumCosts[0], previousMinimumCosts[2]),
      costs[i][2] + Math.min(previousMinimumCosts[0], previousMinimumCosts[1])
    ]);
  }

  return Math.min(...dp.get(costs.length - 1)!);
}

export default minCost;
