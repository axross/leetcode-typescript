import rob from "./houseRobber";

describe("198. House Robber", () => {
  const TEST_CASES = new Map([
    [[1, 2, 3, 1], 4],
    [[2, 7, 9, 3, 1], 12],
    [[2, 4, 9, 3, 1, 5], 16]
  ]);

  for (const [nums, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${nums}]`, () => {
      expect(rob(nums)).toBe(expected);
    });
  }
});
