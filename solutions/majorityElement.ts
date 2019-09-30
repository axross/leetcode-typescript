// 169. Majority Element
// https://leetcode.com/problems/majority-element/
export default function majorityElement(nums: number[]): number {
  const counts = new Map();

  for (const num of nums) {
    const count = (counts.get(num) || 0) + 1;

    if (count >= nums.length / 2) return num;

    counts.set(num, count);
  }

  throw new Error();
}
