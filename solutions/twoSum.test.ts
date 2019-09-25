import twoSum from "./twoSum";

describe("1. Two Sum", () => {
  const TEST_CASES = new Map<[number[], number], [number, number]>([
    [[[2, 7, 11, 15], 9], [0, 1]],
    [[[2, 7, 11, 15], 18], [1, 2]]
  ]);

  for (const [[nums, target], expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${nums}] and ${target}`, () => {
      expect(twoSum(nums, target)).toEqual(expected);
    });
  }
});
