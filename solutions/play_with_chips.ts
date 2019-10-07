// 1217. Play with Chips
// https://leetcode.com/problems/play-with-chips/
export default function minCostToMoveChips(chips: number[]): number {
  return Math.min(
    ...chips.reduce(
      ([odd, even], chip) =>
        chip % 2 === 1 ? [odd + 1, even] : [odd, even + 1],
      [0, 0]
    )
  );
}
