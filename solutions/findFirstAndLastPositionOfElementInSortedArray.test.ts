import searchRange from "./findFirstAndLastPositionOfElementInSortedArray";

describe("34. Find First and Last Position of Element in Sorted Array", () => {
  const TEST_CASES = new Map<[number[], number], [number, number]>([
    [[[5, 7, 7, 8, 8, 10], 8], [3, 4]],
    [[[5, 7, 7, 8, 8, 10], 6], [-1, -1]],
    [[[2, 2], 2], [0, 1]]
  ]);

  for (const [[nums, target], expected] of TEST_CASES) {
    it(`returns [${expected}] when called with [${nums}] and ${target}`, () => {
      expect(searchRange(nums, target)).toEqual(expected);
    });
  }
});
