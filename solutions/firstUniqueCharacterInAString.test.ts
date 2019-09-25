import firstUniqChar from "./firstUniqueCharacterInAString";

describe("387. First Unique Character in a String", () => {
  const TEST_CASES = new Map([
    ["leetcode", 0],
    ["loveleetcode", 2],
    ["leetcodeleetcode", -1],
    ["theleetcode", 1],
    ["j", 0],
    ["", -1]
  ]);

  for (const [s, expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${s}`, () => {
      expect(firstUniqChar(s)).toBe(expected);
    });
  }
});
