import findLongestChain from "./maximumLengthOfPairChain";

describe("646. Maximum Length of Pair Chain", () => {
  test("#1", () => {
    expect(findLongestChain([[1, 2], [2, 3], [3, 4]])).toBe(2);
  });

  test("#2", () => {
    expect(findLongestChain([[3, 4], [2, 3], [1, 2]])).toBe(2);
  });

  test("#3", () => {
    expect(findLongestChain([[1, 2]])).toBe(1);
  });
});
