// 389. Find the Difference
// https://leetcode.com/problems/find-the-difference/
export default function findTheDifference(s: string, t: string): string {
  const counts = new Map();

  for (let i = 0; i < t.length; ++i) {
    if (i < s.length) {
      counts.set(s[i], (counts.get(s[i]) || 0) + 1);

      if (counts.get(s[i]) === 0) {
        counts.delete(s[i]);
      }
    }

    counts.set(t[i], (counts.get(t[i]) || 0) - 1);

    if (counts.get(t[i]) === 0) {
      counts.delete(t[i]);
    }
  }

  return counts.keys().next().value;
}
