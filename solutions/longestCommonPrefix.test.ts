import longestCommonPrefix from "./longestCommonPrefix";

describe("14. Longest Common Prefix", () => {
  const TEST_CASES = new Map([
    [["flower", "flow", "flight"], "fl"],
    [["dog", "racecar", "car"], ""],
    [["aca", "cba"], ""],
    [[""], ""],
    [["a"], "a"],
    [["a", "b"], ""]
  ]);

  for (const [strs, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${strs}]`, () => {
      expect(longestCommonPrefix(strs)).toBe(expected);
    });
  }
});
