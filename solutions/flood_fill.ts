// 733. Flood Fill
// https://leetcode.com/problems/flood-fill/
export default function floodFill(
  image: number[][],
  startingRow: number,
  startingColumn: number,
  newColor: number
): number[][] {
  let startingColor = image[startingRow][startingColumn];

  if (startingColor === newColor) {
    return image;
  }

  const stack: PixelPosition[] = [[startingRow, startingColumn]];

  while (stack.length >= 1) {
    const [row, column] = stack.pop()!;

    if (image[row][column] !== startingColor) {
      continue;
    }

    image[row][column] = newColor;

    if (row - 1 >= 0) {
      stack.push([row - 1, column]);
    }

    if (row + 1 < image.length) {
      stack.push([row + 1, column]);
    }

    if (column - 1 >= 0) {
      stack.push([row, column - 1]);
    }

    if (column + 1 < image[0].length) {
      stack.push([row, column + 1]);
    }
  }

  return image;
}

// [row, column]
type PixelPosition = [number, number];
