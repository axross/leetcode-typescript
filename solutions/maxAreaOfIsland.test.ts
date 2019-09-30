import maxAreaOfIsland from "./maxAreaOfIsland";

describe("695. Max Area of Island", () => {
  const TEST_CASES = new Map<(1 | 0)[][], number>([
    [
      [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
      ],
      6
    ],
    [[[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]], 4],
    [[[0, 0, 0, 0, 0, 0, 0, 0]], 0]
  ]);

  for (const [grid, expected] of TEST_CASES) {
    it(`returns ${expected} when called with some ${grid[0].length}x${grid.length} grid`, () => {
      expect(maxAreaOfIsland(grid)).toBe(expected);
    });
  }
});
