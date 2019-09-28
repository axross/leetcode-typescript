import uniquePaths from "./uniquePaths";

describe("62. Unique Paths", () => {
  const TEST_CASES = new Map([[[3, 2], 3], [[7, 3], 28]]);

  for (const [[m, n], expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${m} and ${n}`, () => {
      expect(uniquePaths(m, n)).toBe(expected);
    });
  }
});
