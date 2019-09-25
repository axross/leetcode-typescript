import floodFill from "./floodFill";

describe("733. Flood Fill", () => {
  const TEST_CASES = new Map<[number[][], number, number, number], number[][]>([
    [
      [[[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2],
      [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
    ],
    [
      [
        [
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 1],
          [0, 1, 0, 0, 0],
          [0, 1, 0, 0, 0],
          [0, 1, 0, 0, 0]
        ],
        3,
        3,
        255
      ],
      [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 1, 255, 255, 255],
        [0, 1, 255, 255, 255],
        [0, 1, 255, 255, 255]
      ]
    ],
    [[[[0, 0, 0], [0, 1, 1]], 1, 1, 1], [[0, 0, 0], [0, 1, 1]]]
  ]);

  for (const [
    [image, startingRow, startingColumn, newColor],
    expected
  ] of TEST_CASES) {
    it(`returns [${expected.map(
      row => `[${row}]`
    )}] when called with [${image.map(
      row => `[${row}]`
    )}], ${startingRow}, ${startingColumn} and ${newColor}`, () => {
      expect(floodFill(image, startingRow, startingColumn, newColor)).toEqual(
        expected
      );
    });
  }
});
