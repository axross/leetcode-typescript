// 704. Binary Search
// https://leetcode.com/problems/binary-search/
export default function search(nums: number[], target: number): number {
  let from = 0;
  let to = nums.length;

  while (from <= to) {
    const middle = Math.floor((from + to) / 2);

    if (nums[middle] === target) return middle;

    if (target < nums[middle]) {
      to = middle - 1;
    } else {
      from = middle + 1;
    }
  }

  return -1;
}
