import plusOne from "./plusOne";

describe("66. Plus One", () => {
  const TEST_CASES = new Map([
    [[1, 2, 3], [1, 2, 4]],
    [[1, 2, 9], [1, 3, 0]],
    [[9, 9, 9], [1, 0, 0, 0]],
    [
      [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3],
      [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
    ],
    [[0], [1]],
    [[9], [1, 0]]
  ]);

  for (const [digits, expected] of TEST_CASES) {
    it(`returns [${expected}] when called with [${digits}]`, () => {
      expect(plusOne(digits)).toEqual(expected);
    });
  }
});
