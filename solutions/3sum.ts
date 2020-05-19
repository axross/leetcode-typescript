// 15. 3Sum
// https://leetcode.com/problems/3sum/
export default function threeSum(nums: number[]): number[][] {
  const triplets: [number, number, number][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; ++i) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    let target = -nums[i];

    while (left < right) {
      if (nums[left] + nums[right] < target) {
        while (nums[left + 1] === nums[left]) {
          left += 1;
        }

        left += 1;

        continue;
      }

      if (nums[left] + nums[right] > target) {
        while (nums[right - 1] === nums[right]) {
          right -= 1;
        }

        right -= 1;

        continue;
      }

      triplets.push([nums[i], nums[left], nums[right]]);

      while (nums[left + 1] === nums[left]) {
        left += 1;
      }

      while (nums[right - 1] === nums[right]) {
        right -= 1;
      }

      left += 1;
      right -= 1;
    }
  }

  return triplets;
}
