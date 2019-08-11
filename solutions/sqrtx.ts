// 69. Sqrt(x)
// https://leetcode.com/problems/sqrtx/
function mySqrt(x: number): number {
  if (x <= 1) return x;

  let searchRangeStart = 0;
  let searchRangeEnd = x;

  while (searchRangeStart < searchRangeEnd - 1) {
    const middle = Math.floor((searchRangeStart + searchRangeEnd) / 2);
    const divided = Math.floor(x / middle);

    if (divided === middle) return middle;

    if (middle > divided) {
      searchRangeEnd = middle;
    } else {
      searchRangeStart = middle;
    }
  }

  return searchRangeStart;
}

export default mySqrt;
