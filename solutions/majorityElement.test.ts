import majorityElement from "./majorityElement";

describe("169. Majority Element", () => {
  const TEST_CASES = new Map([[[3, 2, 3], 3], [[2, 2, 1, 1, 1, 2, 2], 2]]);

  for (const [nums, expected] of TEST_CASES) {
    it(`returns ${expected} when calling with [${nums}]`, () => {
      expect(majorityElement(nums)).toBe(expected);
    });
  }
});
