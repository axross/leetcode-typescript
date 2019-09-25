import findLongestChain from "./maximumLengthOfPairChain";

describe("646. Maximum Length of Pair Chain", () => {
  const TEST_CASES = new Map<[number, number][], number>([
    [[[1, 2], [2, 3], [3, 4]], 2],
    [[[3, 4], [2, 3], [1, 2]], 2],
    [[[1, 2]], 1]
  ]);

  for (const [pairs, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${pairs}]`, () => {
      expect(findLongestChain(pairs)).toBe(expected);
    });
  }
});
