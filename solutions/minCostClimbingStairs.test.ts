import minCostClimbingStairs from "./minCostClimbingStairs";

describe("746. Min Cost Climbing Stairs", () => {
  const TEST_CASES = new Map([
    [[10, 15, 20], 15],
    [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1], 6]
  ]);

  for (const [costs, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${costs}]`, () => {
      expect(minCostClimbingStairs(costs)).toBe(expected);
    });
  }
});
