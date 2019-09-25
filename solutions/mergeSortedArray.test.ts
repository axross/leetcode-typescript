import merge from "./mergeSortedArray";

describe("88. Merge Sorted Array", () => {
  const TEST_CASES = new Map<[number[], number, number[], number], number[]>([
    [[[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3], [1, 2, 2, 3, 5, 6]],
    [[[1, 2, 5, 0, 0, 0], 3, [3, 4, 6], 3], [1, 2, 3, 4, 5, 6]],
    [[[1, 2, 5, 0, 0, 0], 3, [3], 1], [1, 2, 3, 5]],
    [[[4, 0, 0, 0], 1, [1, 2, 3], 3], [1, 2, 3, 4]],
    [[[0, 0, 0], 0, [1, 2, 3], 3], [1, 2, 3]],
    [[[1, 2, 3], 3, [], 0], [1, 2, 3]],
    [[[], 0, [], 0], []]
  ]);

  for (const [[nums1, m, nums2, n], expected] of TEST_CASES) {
    it(`merges in-placely [${nums2}] (length=${n}) into [${nums1}] (length=${m})`, () => {
      const nums = [...nums1];
      const result = merge(nums, m, nums2, n);

      expect(result).toEqual(expected);
      expect(result).toBe(nums);
    });
  }
});
