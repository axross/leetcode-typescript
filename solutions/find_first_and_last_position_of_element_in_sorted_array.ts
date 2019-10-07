// 34. Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
export default function searchRange(
  nums: number[],
  target: number
): [number, number] {
  // binary search to find the first index
  let from = 0;
  let to = nums.length;

  // loop until the search range shrinks to be from + 2 === to
  while (to - from >= 3) {
    const middle = Math.floor((from + to) / 2);

    if (nums[middle] >= target) {
      to = middle + 1;
    } else {
      from = middle;
    }
  }

  // nums[from] or nums[to - 1] may point the target value
  // otherwise, there's no target value
  let first: number;

  if (nums[from] === target) {
    first = from;
  } else if (nums[to - 1] === target) {
    first = to - 1;
  } else {
    return [-1, -1];
  }

  // binary search to find the last index
  from = first >= 0 ? first : 0;
  to = nums.length;

  // do the same binary search for the last index
  while (to - from >= 3) {
    const middle = Math.floor((from + to) / 2);

    if (nums[middle] <= target) {
      from = middle;
    } else {
      to = middle + 1;
    }
  }

  let last: number;

  // pick to-value first because the values both from and to point could be target
  if (nums[to - 1] === target) {
    last = to - 1;
  } else if (nums[from] === target) {
    last = from;
  }

  return [first, last!];
}
