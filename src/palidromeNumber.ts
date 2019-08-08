// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/

function isPalindrome(x: number): boolean {
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

describe("9. Palindrome Number", () => {
  test("#1", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test("#2", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test("#3", () => {
    expect(isPalindrome(5)).toBe(true);
  });

  test("#4", () => {
    expect(isPalindrome(0)).toBe(true);
  });

  test("#5", () => {
    expect(isPalindrome(10)).toBe(false);
  });

  test("#6", () => {
    expect(isPalindrome(101)).toBe(true);
  });

  test("#7", () => {
    expect(isPalindrome(1010)).toBe(false);
  });
});
