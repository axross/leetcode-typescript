import isPalindrome from "./palidromeNumber";

describe("9. Palindrome Number", () => {
  const TEST_CASES = new Map([
    [121, true],
    [-121, false],
    [5, true],
    [0, true],
    [10, false],
    [101, true],
    [1010, false]
  ]);

  for (const [number, expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${number}`, () => {
      expect(isPalindrome(number)).toBe(expected);
    });
  }
});
