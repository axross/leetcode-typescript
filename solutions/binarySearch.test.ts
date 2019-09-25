import search from "./binarySearch";

describe("704. Binary Search", () => {
  const TEST_CASES = new Map<[number[], number], number>([
    [[[-1, 0, 3, 5, 9, 12], 9], 4],
    [[[-1, 0, 3, 5, 9, 12], 13], -1]
  ]);

  for (const [[nums, target], expected] of TEST_CASES) {
    it(`returns ${expected} when [${nums}] and ${target}`, () => {
      expect(search(nums, target)).toBe(expected);
    });
  }
});
