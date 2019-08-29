import searchMatrix from "./searchA2dMatrix2";

describe("240. Search a 2D Matrix II", () => {
  test("#1", () => {
    expect(
      searchMatrix(
        [
          [1, 4, 7, 11, 15],
          [2, 5, 8, 12, 19],
          [3, 6, 9, 16, 22],
          [10, 13, 14, 17, 24],
          [18, 21, 23, 26, 30]
        ],
        5
      )
    ).toBe(true);
  });

  test("#2", () => {
    expect(
      searchMatrix(
        [
          [1, 4, 7, 11, 15],
          [2, 5, 8, 12, 19],
          [3, 6, 9, 16, 22],
          [10, 13, 14, 17, 24],
          [18, 21, 23, 26, 30]
        ],
        20
      )
    ).toBe(false);
  });
});
