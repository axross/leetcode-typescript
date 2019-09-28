import isAnagram from "./validAnagram";

describe("242. Valid Anagram", () => {
  const TEST_CASES = new Map([
    [["anagram", "nagaram"], true],
    [["car", "rat"], false],
    [["a", "aa"], false]
  ]);

  for (const [[s, t], expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${s} and ${t}`, () => {
      expect(isAnagram(s, t)).toBe(expected);
    });
  }
});
