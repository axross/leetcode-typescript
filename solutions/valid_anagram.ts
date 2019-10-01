// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/
export default function isAnagram(s: string, t: string) {
  if (s.length !== t.length) return false;

  const countEachCharacter = new Array(26).fill(0);

  for (let i = 0; i < s.length; ++i) {
    countEachCharacter[s.charCodeAt(i) - 97] += 1;
    countEachCharacter[t.charCodeAt(i) - 97] -= 1;
  }

  return countEachCharacter.every(count => count === 0);
}
