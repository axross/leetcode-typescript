import removeDuplicates from "./removeDuplicatesFromSortedArray";

describe("26. Remove Duplicates from Sorted Array", () => {
  const TEST_CASES = new Map([
    [[1, 1, 2], [2, [1, 2]]],
    [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [5, [0, 1, 2, 3, 4]]],
    [[], [0, []]]
  ]);

  for (const [nums, [expected, expectedRemoved]] of TEST_CASES) {
    it(`returns ${expected} (to be [${expectedRemoved}]) when called with [${nums}]`, () => {
      const newLength = removeDuplicates(nums);

      expect(newLength).toBe(expected);
      expect(nums.slice(0, newLength)).toEqual(expectedRemoved);
    });
  }
});
