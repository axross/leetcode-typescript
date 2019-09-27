import checkPerfectNumber from "./perfectNumber";

describe("416. Partition Equal Subset Sum", () => {
  const TEST_CASES = new Map([
    [28, true],
    [27, false],
    [6, true],
    [1, false],
    [0, false]
  ]);

  for (const [nums, expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${nums}`, () => {
      expect(checkPerfectNumber(nums)).toBe(expected);
    });
  }
});
