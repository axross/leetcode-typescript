import maxSubArray from "./maximumSubarray";

describe("53. Maximum Subarray", () => {
  const TEST_CASES = new Map([
    [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
    [[-3, -2, -5, -1, -4, -1], -1]
  ]);

  for (const [nums, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${nums}]`, () => {
      expect(maxSubArray(nums)).toBe(expected);
    });
  }
});
