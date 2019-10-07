// 62. Unique Paths
// https://leetcode.com/problems/unique-paths/
export default function uniquePaths(m: number, n: number) {
  if (m === 1 || n === 1) return 1;

  const key = `${m}x${n}`;

  if (!memo.has(key)) {
    memo.set(key, uniquePaths(m - 1, n) + uniquePaths(m, n - 1));
  }

  return memo.get(key);
}

const memo = new Map();
