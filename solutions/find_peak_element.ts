// 162. Find Peak Element
// https://leetcode.com/problems/find-peak-element/
export default function findPeakElement(nums: number[]): number {
  let from = 0;
  let to = nums.length;

  while (to - from >= 2) {
    const middle = Math.floor((from + to) / 2);

    if (nums[middle] < nums[middle - 1]) {
      to = middle;
    } else {
      from = middle;
    }
  }

  return from;
}
