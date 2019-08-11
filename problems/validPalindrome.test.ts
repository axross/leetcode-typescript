import isPalindrome from "./validPalindrome";

describe("125. Valid Palindrome", () => {
  test("#1", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("#2", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  test("#3", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("#4", () => {
    expect(isPalindrome("0P")).toBe(false);
  });
});
