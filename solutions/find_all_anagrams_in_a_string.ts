// 438. Find All Anagrams in a String
// https://leetcode.com/problems/find-all-anagrams-in-a-string
export default function findAnagrams(s: string, p: string): number[] {
  const positions = [];
  const sWindow = new Array(26).fill(0);
  const pWindow = new Array(26).fill(0);

  for (const char of p) {
    pWindow[char.charCodeAt(0) - 97] += 1;
  }

  for (let i = 0; i < s.length; ++i) {
    if (i - p.length >= 0) {
      sWindow[s.charCodeAt(i - p.length) - 97] -= 1;
    }

    sWindow[s.charCodeAt(i) - 97] += 1;

    if (sWindow.every((count, i) => count === pWindow[i])) {
      positions.push(i - p.length + 1);
    }
  }

  return positions;
}

findAnagrams("cbaebabacd", "bb");
