import isPalindrome from "./palidromeNumber";

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
