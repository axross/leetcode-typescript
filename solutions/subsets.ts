// 78. Subsets
// https://leetcode.com/problems/subsets/
export default function subsets(nums: number[]): number[][] {
  const result = [];

  for (let i = 0; i < Math.pow(2, nums.length); ++i) {
    result.push(
      i
        .toString(2) // make it into binary string
        .padStart(nums.length, "0")
        .split("")
        .reduce(
          (arr, v, i) => (v === "1" ? [...arr, nums[i]] : arr),
          [] as number[]
        )
    );
  }

  return result;
}
