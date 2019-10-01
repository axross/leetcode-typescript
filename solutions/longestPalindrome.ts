// 409. Longest Palindrome
// https://leetcode.com/problems/longest-palindrome/
export default function longestPalindrome(s: string): number {
  const oddChars = new Set<number>();
  let count = 0;

  for (let i = 0; i < s.length; ++i) {
    const char = s.charCodeAt(i);

    if (oddChars.has(char)) {
      oddChars.delete(char);

      count += 2;
    } else {
      oddChars.add(char);
    }
  }

  return count + (oddChars.size >= 1 ? 1 : 0);
}
