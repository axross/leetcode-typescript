// 594. Longest Harmonious Subsequence
// https://leetcode.com/problems/longest-harmonious-subsequence/
export default function findLHS(nums: number[]): number {
  const counts = new Map();
  let longest = 0;

  for (const num of nums) {
    counts.set(num, (counts.get(num) || 0) + 1);

    if (counts.has(num - 1)) {
      longest = Math.max(longest, counts.get(num) + counts.get(num - 1));
    }

    if (counts.has(num + 1)) {
      longest = Math.max(longest, counts.get(num) + counts.get(num + 1));
    }
  }

  return longest;
}
