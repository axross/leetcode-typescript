// 832. Flipping an Image
// https://leetcode.com/problems/flipping-an-image/
export default function flipAndInvertImage(a: (1 | 0)[][]): (1 | 0)[][] {
  for (const row of a) {
    for (let l = 0, r = row.length - 1; l <= r; ++l, --r) {
      [row[l], row[r]] = [-row[r] + 1, -row[l] + 1] as (1 | 0)[];
    }
  }

  return a;
}
