// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/
export default function search(nums: number[], target: number): number {
  // check if the target value is inside a range that may be rotated
  function isInRangeMaybeRotated(from: number, to: number) {
    const fromValue = nums[from];
    const toValue = nums[to];

    // the range is looped when the from value is greater than the to value
    if (fromValue > toValue) return target >= fromValue || target <= toValue;

    // when the range is not looped, target must be between the from value and the to value
    return target >= fromValue && target <= toValue;
  }

  let from = 0;
  let to = nums.length;

  while (from < to) {
    const middle = Math.floor((from + to) / 2);

    if (nums[middle] === target) return middle;

    if (isInRangeMaybeRotated(from, middle - 1)) {
      to = middle;
    } else {
      from = middle + 1;
    }
  }

  return -1;
}
