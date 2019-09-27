import searchInsert from "./searchInsertPosition";

describe("35. Search Insert Position", () => {
  const TEST_CASES = new Map<[number[], number], number>([
    [[[1, 3, 5, 6], 5], 2],
    [[[1, 3, 5, 6], 2], 1],
    [[[1, 3, 5, 6], 7], 4],
    [[[1, 3, 5, 6], 0], 0]
  ]);

  for (const [[nums, target], expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${nums}] and ${target}`, () => {
      expect(searchInsert(nums, target)).toBe(expected);
    });
  }
});
