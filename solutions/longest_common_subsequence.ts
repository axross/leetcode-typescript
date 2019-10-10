// 1143. Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/
export default function longestCommonSubsequence(
  text1: string,
  text2: string
): number {
  const memo = new Map();

  function recurse(i1: number, i2: number): number {
    if (i1 === text1.length || i2 === text2.length) return 0;

    const key = i1 + i2 * text1.length;

    if (!memo.has(key)) {
      if (text1[i1] === text2[i2]) {
        memo.set(key, 1 + recurse(i1 + 1, i2 + 1));
      } else {
        memo.set(key, Math.max(recurse(i1 + 1, i2), recurse(i1, i2 + 1)));
      }
    }

    return memo.get(key);
  }

  return recurse(0, 0);
}
