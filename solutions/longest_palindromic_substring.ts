// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
export default function longestPalindrome(s: string): string {
  let maxPalindromeFrom = 0;
  let maxPalindromeTo = 0;

  for (let i = 0; i < s.length; ++i) {
    const maxRadius = Math.min(s.length - i - 1, i - 0);
    let palindromicFrom = i;
    let palindromicTo = i + 1;

    for (let radius = 1; radius <= maxRadius; ++radius) {
      if (s[i - radius] !== s[i + radius]) break;

      palindromicFrom -= 1;
      palindromicTo += 1;
    }

    if (palindromicTo - palindromicFrom > maxPalindromeTo - maxPalindromeFrom) {
      maxPalindromeFrom = palindromicFrom;
      maxPalindromeTo = palindromicTo;
    }

    if (s[i + 1] && s[i + 1] === s[i]) {
      const maxRadius = Math.min(s.length - i - 2, i - 0);
      let palindromicFrom = i;
      let palindromicTo = i + 2;

      for (let radius = 1; radius <= maxRadius; ++radius) {
        if (s[i - radius] !== s[i + 1 + radius]) break;

        palindromicFrom -= 1;
        palindromicTo += 1;
      }

      if (
        palindromicTo - palindromicFrom >
        maxPalindromeTo - maxPalindromeFrom
      ) {
        maxPalindromeFrom = palindromicFrom;
        maxPalindromeTo = palindromicTo;
      }
    }
  }

  return s.substring(maxPalindromeFrom, maxPalindromeTo);
}
