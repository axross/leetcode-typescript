// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/
export default function searchInsert(nums: number[], target: number) {
  let from = 0;
  let to = nums.length;

  while (from < to) {
    const middle = Math.floor((from + to) / 2);

    if (nums[middle] < target) {
      from = middle + 1;
    } else {
      to = middle;
    }
  }

  return from;
}
