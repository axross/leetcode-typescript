// 1218. Longest Arithmetic Subsequence of Given Difference
// https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/
export default function longestSubsequence(
  numbers: number[],
  diff: number
): number {
  const indexes = new Map();
  const values = [];
  let max = 0;

  for (let i = 0; i < numbers.length; ++i) {
    values.push(
      indexes.has(numbers[i] - diff)
        ? values[indexes.get(numbers[i] - diff)!] + 1
        : 1
    );
    indexes.set(numbers[i], i);
    max = Math.max(max, values[values.length - 1]);
  }

  return max;
}
