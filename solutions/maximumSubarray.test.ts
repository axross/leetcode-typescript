import maxSubArray from "./maximumSubarray";

describe("53. Maximum Subarray", () => {
  test("#1", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test("#2", () => {
    expect(maxSubArray([-3, -2, -5, -1, -4, -1])).toBe(-1);
  });
});
