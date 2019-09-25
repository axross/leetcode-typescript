import isAlienSorted from "./verifyingAnAlienDictionary";

describe("953. Verifying an Alien Dictionary", () => {
  const TEST_CASES = new Map<[string[], string], boolean>([
    [[["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"], true],
    [[["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"], false],
    [[["apple", "app"], "abcdefghijklmnopqrstuvwxyz"], false]
  ]);

  for (const [[words, order], expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${words}] and ${order}`, () => {
      expect(isAlienSorted(words, order)).toBe(expected);
    });
  }
});
