import findMin from "./findMinimumInRotatedSortedArray";

describe("153. Find Minimum in Rotated Sorted Array", () => {
  const TEST_CASES = new Map([
    [[3, 4, 5, 1, 2], 1],
    [[4, 5, 6, 7, 0, 1, 2], 0],
    [[3, 1, 2], 1],
    [[1, 2, 3, 4, 5, 6], 1],
    [[2, 1], 1],
    [[1], 1]
  ]);

  for (const [values, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${values}]`, () => {
      expect(findMin(values)).toBe(expected);
    });
  }
});
