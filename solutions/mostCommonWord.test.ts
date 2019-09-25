import mostCommonWord from "./mostCommonWord";

describe("819. Most Common Word", () => {
  const TEST_CASES = new Map<[string, string[]], string>([
    [
      ["Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]],
      "ball"
    ],
    [["Bob hit a ball, the hit BALL flew far after it was hit.", []], "hit"],
    [["Bob", []], "bob"],
    [["a, a, a, a, b,b,b,c, c", ["a"]], "b"]
  ]);

  for (const [[paragraph, banned], expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${paragraph} with [${banned}]`, () => {
      expect(mostCommonWord(paragraph, banned)).toBe(expected);
    });
  }
});
