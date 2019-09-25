import strStr from "./implementStrstr";

describe("28. Implement strStr()", () => {
  const TEST_CASES = new Map([
    [["hello", "ll"], 2],
    [["aaaaa", "bba"], -1],
    [["llooll", "ll"], 0],
    [["llooll", "ool"], 2],
    [["hello", ""], 0],
    [["", "a"], -1],
    [["", ""], 0],
    [["aaa", "aaaa"], -1],
    [["hello", "lo"], 3]
  ]);

  for (const [[haystack, needle], expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${haystack}] and ${needle}`, () => {
      expect(strStr(haystack, needle)).toBe(expected);
    });
  }
});
