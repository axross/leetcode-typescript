import climbStairs from "./climbingStairs";

describe("70. Climbing Stairs", () => {
  const TEST_CASES = new Map([[1, 1], [2, 2], [3, 3], [4, 5], [32, 3524578]]);

  for (const [n, expected] of TEST_CASES) {
    it(`returns ${expected} when ${n}`, () => {
      expect(climbStairs(n)).toBe(expected);
    });
  }
});
