import intersection from "./intersectionOfTwoArrays";

describe("349. Intersection of Two Arrays", () => {
  const TEST_CASES = new Map<[number[], number[]], number[]>([
    [[[1, 2, 2, 1], [2, 2]], [2]],
    [[[4, 9, 5], [9, 4, 9, 8, 4]], [9, 4]]
  ]);

  for (const [[nums1, nums2], expected] of TEST_CASES) {
    it(`returns [${expected}] when called with [${nums1}] and [${nums2}]`, () => {
      expect(intersection(nums1, nums2)).toEqual(expected);
    });
  }
});
