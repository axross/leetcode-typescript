// 695. Max Area of Island
// https://leetcode.com/problems/max-area-of-island/
export default function maxAreaOfIsland(grid: (1 | 0)[][]): number {
  const width = grid[0].length;
  const height = grid.length;

  function repaint(x: number, y: number): number {
    if (grid[y][x] === 0) return 0;

    grid[y][x] = 0;

    return (
      1 +
      (x - 1 >= 0 ? repaint(x - 1, y) : 0) +
      (y - 1 >= 0 ? repaint(x, y - 1) : 0) +
      (x + 1 < width ? repaint(x + 1, y) : 0) +
      (y + 1 < height ? repaint(x, y + 1) : 0)
    );
  }

  let maxArea = 0;

  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      maxArea = Math.max(maxArea, repaint(x, y));
    }
  }

  return maxArea;
}
