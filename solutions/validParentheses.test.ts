import isValid from "./validParentheses";

describe("20. Valid Parentheses", () => {
  const TEST_CASES = new Map([
    ["()", true],
    ["()[]{}", true],
    ["(]", false],
    ["([)]", false],
    ["{[]}", true],
    ["[", false],
    ["[{", false]
  ]);

  for (const [s, expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${s}`, () => {
      expect(isValid(s)).toBe(expected);
    });
  }
});
