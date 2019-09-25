import searchMatrix from "./searchA2dMatrix2";

describe("240. Search a 2D Matrix II", () => {
  const TEST_CASES = new Map<[number[][], number], boolean>([
    [
      [
        [
          [1, 4, 7, 11, 15],
          [2, 5, 8, 12, 19],
          [3, 6, 9, 16, 22],
          [10, 13, 14, 17, 24],
          [18, 21, 23, 26, 30]
        ],
        5
      ],
      true
    ],
    [
      [
        [
          [1, 4, 7, 11, 15],
          [2, 5, 8, 12, 19],
          [3, 6, 9, 16, 22],
          [10, 13, 14, 17, 24],
          [18, 21, 23, 26, 30]
        ],
        20
      ],
      false
    ]
  ]);

  for (const [[matrix, target], expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${matrix.map(
      list => `[${list}]`
    )}] and ${target}`, () => {
      expect(searchMatrix(matrix, target)).toBe(expected);
    });
  }
});
