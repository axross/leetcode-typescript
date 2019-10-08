// 961. N-Repeated Element in Size 2N Array
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/submissions/
export default function repeatedNTimes<T>(A: T[]): T {
  const found = new Set();

  for (const value of A) {
    if (found.has(value)) return value;

    found.add(value);
  }

  throw new Error("unreachable here");
}
