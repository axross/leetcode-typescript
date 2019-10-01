// 240. Search a 2D Matrix II
// https://leetcode.com/problems/search-a-2d-matrix-ii/
export default function searchMatrix(
  matrix: number[][],
  target: number
): boolean {
  if (matrix.length === 0) return false;

  function traverse({
    top,
    bottom,
    left,
    right
  }: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  }): boolean {
    if (top >= bottom || left >= right) return false;

    const pivotX = Math.trunc((right - left) / 2) + left;
    const pivotY = Math.trunc((bottom - top) / 2) + top;
    const pivot = matrix[pivotY][pivotX];

    if (pivot === target) return true;

    if (target < pivot) {
      return (
        traverse({ top, bottom: pivotY, left, right }) ||
        traverse({ top: pivotY, bottom, left, right: pivotX })
      );
    } else {
      return (
        traverse({ top, bottom: pivotY + 1, left: pivotX + 1, right }) ||
        traverse({ top: pivotY + 1, bottom, left, right })
      );
    }
  }

  return traverse({
    top: 0,
    bottom: matrix.length,
    left: 0,
    right: matrix[0].length
  });
}
