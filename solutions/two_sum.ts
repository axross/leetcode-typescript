// 1. Two Sum
// https://leetcode.com/problems/two-sum/
export default function twoSum(
  nums: number[],
  target: number
): [number, number] {
  // Map<number, index>
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; ++i) {
    // find the index of number that target - currentNumber
    const differenceNumberIndex = map.get(target - nums[i]);

    if (differenceNumberIndex !== undefined) {
      // if it found, it's the answer
      return [differenceNumberIndex, i];
    }

    // otherwise, put the number
    map.set(nums[i], i);
  }

  throw new Error("there's no answer.");
}
