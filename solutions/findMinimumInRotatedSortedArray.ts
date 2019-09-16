// 153. Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
export default function findMin(nums: number[]) {
  let from = 0;
  let to = nums.length;

  while (to - from >= 2) {
    const middle = Math.floor((from + to) / 2);

    if (nums[middle - 1] >= nums[to - 1]) {
      from = middle;
    } else {
      to = middle;
    }
  }

  return nums[from];
}
