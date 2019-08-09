// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/
function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  let i1 = 0;
  let i2 = 0;

  while (i1 < m + n && i2 < n) {
    // nums1[i1] > nums2[i2] is when nums2[i2] should be inserted
    // i1 >= i2 + m is when i1 reached to the end of nums1
    if (nums1[i1] > nums2[i2] || i1 >= i2 + m) {
      // insert it and slide elements after that
      nums1.splice(i1, 0, nums2[i2]);

      i2 += 1;
    } else {
      // otherwise, go to compare nums2[i2] with the next one in nums1
      i1 += 1;
    }
  }

  // delete elements after m + n
  nums1.splice(m + n);

  return nums1;
}

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
