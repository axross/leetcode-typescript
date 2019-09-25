import canPartition from "./partitionEqualSubsetSum";

describe("416. Partition Equal Subset Sum", () => {
  const TEST_CASES = new Map([
    [[1, 5, 11, 5], true],
    [[1, 2, 3, 5], false],
    [[8, 6, 3, 4, 5], true]
  ]);

  for (const [nums, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${nums}]`, () => {
      expect(canPartition(nums)).toBe(expected);
    });
  }
});
