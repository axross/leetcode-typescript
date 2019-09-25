import isPalindrome from "./validPalindrome";

describe("125. Valid Palindrome", () => {
  const TEST_CASES = new Map([
    ["A man, a plan, a canal: Panama", true],
    ["race a car", false],
    ["", true],
    ["0P", false]
  ]);

  for (const [s, expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${s}`, () => {
      expect(isPalindrome(s)).toBe(expected);
    });
  }
});
