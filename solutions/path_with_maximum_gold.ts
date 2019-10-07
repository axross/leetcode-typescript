// 1219. Path with Maximum Gold
// https://leetcode.com/problems/path-with-maximum-gold/
export default function getMaximumGold(grid: number[][]): number {
  const width = grid[0].length;
  const height = grid.length;
  let maxGold = 0;

  function explore(y: number, x: number): number {
    if (x < 0 || x === width || y < 0 || y === height) return 0;
    if (grid[y][x] === 0) return 0;

    const gold = grid[y][x];

    grid[y][x] = 0;

    const totalGold =
      gold +
      Math.max(
        explore(y - 1, x),
        explore(y + 1, x),
        explore(y, x - 1),
        explore(y, x + 1)
      );

    grid[y][x] = gold;

    return totalGold;
  }

  for (let y = 0; y < grid.length; ++y) {
    for (let x = 0; x < grid[0].length; ++x) {
      maxGold = Math.max(maxGold, explore(y, x));
    }
  }

  return maxGold;
}
