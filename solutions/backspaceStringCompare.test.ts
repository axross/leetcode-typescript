import backspaceCompare from "./backspaceStringCompare";

describe("844. Backspace String Compare", () => {
  const TEST_CASES = new Map([
    [["ab#c", "ad#c"], true],
    [["ab##", "c#d#"], true],
    [["a##c", "#a#c"], true],
    [["a#c", "b"], false]
  ]);

  for (const [[s, t], expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${s} and ${t}`, () => {
      expect(backspaceCompare(s, t)).toBe(expected);
    });
  }
});
