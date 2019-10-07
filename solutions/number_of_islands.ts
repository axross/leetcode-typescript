// 200. Number of Islands
// https://leetcode.com/problems/number-of-islands/
export default function numIslands(grid: ("1" | "0")[][]): number {
  const width = grid[0] ? grid[0].length : 0;
  const height = grid.length;
  let islands = 0;

  function explore(y: number, x: number): void {
    if (grid[y][x] === "0") return;

    grid[y][x] = "0";

    if (y - 1 >= 0) explore(y - 1, x);
    if (y + 1 < height) explore(y + 1, x);
    if (x - 1 >= 0) explore(y, x - 1);
    if (x + 1 < width) explore(y, x + 1);
  }

  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      if (grid[y][x] === "0") continue;

      islands += 1;

      explore(y, x);
    }
  }

  return islands;
}
