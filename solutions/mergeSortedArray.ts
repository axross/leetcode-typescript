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

export default merge;
