// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
export default function maxSubArray(nums: number[]): number {
  let current = nums[0];
  let max = current;

  for (let i = 1; i < nums.length; ++i) {
    current = Math.max(nums[i], current + nums[i]);

    if (current > max) {
      max = current;
    }
  }

  return max;
}
