// 344. Reverse String
// https://leetcode.com/problems/reverse-string/
function reverseString(chars: string[]): void {
  // i: 0, 1, 2..., r: 4, 3, 2...
  // r >= i is the middle of chars
  for (let i = 0, r = chars.length - 1; i < r; ++i, --r) {
    // swap in one line
    [chars[i], chars[r]] = [chars[r], chars[i]];
  }
}

export default reverseString;
