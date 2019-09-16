import searchRange from "./findFirstAndLastPositionOfElementInSortedArray";

const TEST_CASES = new Map<[number[], number], [number, number]>([
  [[[5, 7, 7, 8, 8, 10], 8], [3, 4]],
  [[[5, 7, 7, 8, 8, 10], 6], [-1, -1]],
  [[[2, 2], 2], [0, 1]]
]);

describe("34. Find First and Last Position of Element in Sorted Array", () => {
  for (const [args, expected] of TEST_CASES) {
    test(`when [${args[0].join(", ")}], ${args[1]}`, () => {
      expect(searchRange(args[0], args[1])).toEqual(expected);
    });
  }
});
