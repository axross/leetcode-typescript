// 69. Sqrt(x)
// https://leetcode.com/problems/sqrtx/
export default function mySqrt(x: number): number {
  if (x <= 1) return x;

  let from = 1;
  let to = x;

  while (from <= to) {
    const middle = Math.floor((from + to) / 2);
    const squareOfMiddle = middle * middle;

    if (squareOfMiddle === x) return middle;

    if (squareOfMiddle < x) {
      from = middle + 1;
    } else {
      to = middle - 1;
    }
  }

  return to;
}
