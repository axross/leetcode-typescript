import canPartition from "./partitionEqualSubsetSum";

describe("416. Partition Equal Subset Sum", () => {
  test("#1", () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true);
  });

  test("#2", () => {
    expect(canPartition([1, 2, 3, 5])).toBe(false);
  });

  test("#3", () => {
    expect(canPartition([8, 6, 3, 4, 5])).toBe(true);
  });
});
