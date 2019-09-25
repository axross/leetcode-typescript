import romanToInt from "./romanToInteger";

describe("13. Roman to Integer", () => {
  const TEST_CASES = new Map([
    ["VI", 6],
    ["IV", 4],
    ["III", 3],
    ["IIII", 4],
    ["XIII", 13],
    ["MDCLXVI", 1666],
    ["MCDCXLXIV", 1554],
    ["CMCDXCXLIXIV", 1443]
  ]);

  for (const [s, expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${s}`, () => {
      expect(romanToInt(s)).toBe(expected);
    });
  }
});
