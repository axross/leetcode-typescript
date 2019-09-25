import subsets from "./subsets";

describe("78. Subsets", () => {
  const TEST_CASES = new Map([
    [[1, 2, 3], [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []]]
  ]);

  for (const [nums, expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${nums}`, () => {
      const result = subsets(nums);

      expect([...result].sort()).toEqual([...expected].sort());
    });
  }
});
