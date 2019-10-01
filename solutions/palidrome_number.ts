// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/
export default function isPalindrome(x: number): boolean {
  if (x >= 0 && x <= 9) return true;
  if (x < 0) return false;

  let currentX = x;
  let digits: number[] = [];

  // make an array of digits
  while (currentX > 0) {
    digits.push(currentX % 10);
    currentX = Math.trunc(currentX / 10);
  }

  for (let i = 0; i < digits.length / 2; ++i) {
    // compare values at mirror side
    if (digits[i] !== digits[digits.length - i - 1]) {
      return false;
    }
  }

  return true;
}
