import findClosestElements from "./findKClosestElements";

describe("658. Find K Closest Elements", () => {
  const TEST_CASES = new Map<[number[], number, number], number[]>([
    [[[1, 2, 3, 4, 5], 4, 3], [1, 2, 3, 4]],
    [[[1, 2, 3, 4, 5], 4, -1], [1, 2, 3, 4]],
    [[[1, 2], 1, 1], [1]],
    [[[1, 3, 3, 4, 5, 7, 7, 8, 8, 8], 6, 6], [4, 5, 7, 7, 8, 8]]
  ]);

  for (const [[arr, k, x], expected] of TEST_CASES) {
    it(`returns [${expected}] when called with [${arr}], ${k} and ${x}`, () => {
      expect(findClosestElements(arr, k, x)).toEqual(expected);
    });
  }
});
