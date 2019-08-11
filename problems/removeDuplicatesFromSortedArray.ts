// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
function removeDuplicates(nums: number[]): number {
  // avoid because it will access [1] below
  if (nums.length === 0) return 0;

  let noDuplicateI = 0;

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] !== nums[noDuplicateI]) {
      noDuplicateI += 1;

      // [0, 1, 1, 2, 2, 3, 3] -> [0, 1, 2, 3, 2, 3, 3]
      nums[noDuplicateI] = nums[i];
    }
  }

  // add 1 because i is cursor
  return noDuplicateI + 1;
}

export default removeDuplicates;
