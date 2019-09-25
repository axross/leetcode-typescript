import search from "./searchInRotatedSortedArray";

describe("33. Search in Rotated Sorted Array", () => {
  const TEST_CASES = new Map<[number[], number], number>([
    [[[4, 5, 6, 7, 0, 1, 2], 0], 4],
    [[[4, 5, 6, 7, 0, 1, 2], 3], -1],
    [[[4, 5, 6, 7, 0, 1, 2], 4], 0],
    [[[3, 1], 3], 0],
    [[[7, 8, 1, 2, 3, 4, 5, 6], 2], 3]
  ]);

  for (const [[nums, target], expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${nums}] and ${target}`, () => {
      expect(search(nums, target)).toBe(expected);
    });
  }
});
