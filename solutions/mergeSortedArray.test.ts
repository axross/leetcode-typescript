import merge from "./mergeSortedArray";

describe("88. Merge Sorted Array", () => {
  test("#1", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const result = merge(nums1, 3, [2, 5, 6], 3);

    expect(result).toEqual([1, 2, 2, 3, 5, 6]);
    expect(result).toBe(nums1);
  });

  test("#2", () => {
    const nums1 = [1, 2, 5, 0, 0, 0];
    const result = merge(nums1, 3, [3, 4, 6], 3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    expect(result).toBe(nums1);
  });

  test("#3", () => {
    const nums1 = [1, 2, 5, 0, 0, 0];
    const result = merge(nums1, 3, [3], 1);

    expect(result).toEqual([1, 2, 3, 5]);
    expect(result).toBe(nums1);
  });

  test("#4", () => {
    const nums1 = [4, 0, 0, 0];
    const result = merge(nums1, 1, [1, 2, 3], 3);

    expect(result).toEqual([1, 2, 3, 4]);
    expect(result).toBe(nums1);
  });

  test("#5", () => {
    const nums1 = [0, 0, 0];
    const result = merge(nums1, 0, [1, 2, 3], 3);

    expect(result).toEqual([1, 2, 3]);
    expect(result).toBe(nums1);
  });

  test("#6", () => {
    const nums1 = [1, 2, 3];
    const result = merge(nums1, 3, [], 0);

    expect(result).toEqual([1, 2, 3]);
    expect(result).toBe(nums1);
  });

  test("#7", () => {
    const nums1: number[] = [];
    const result = merge(nums1, 0, [], 0);

    expect(result).toEqual([]);
    expect(result).toBe(nums1);
  });
});
