import findMin from "./findMinimumInRotatedSortedArray";

const TEST_CASES = new Map([
  [[3, 4, 5, 1, 2], 1],
  [[4, 5, 6, 7, 0, 1, 2], 0],
  [[3, 1, 2], 1],
  [[1, 2, 3, 4, 5, 6], 1],
  [[2, 1], 1],
  [[1], 1]
]);

describe("153. Find Minimum in Rotated Sorted Array", () => {
  for (const [args, expected] of TEST_CASES) {
    it(`returns ${expected} when [${args}]`, () => {
      expect(findMin(args)).toBe(expected);
    });
  }
});
