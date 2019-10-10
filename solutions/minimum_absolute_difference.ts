// 1200. Minimum Absolute Difference
// https://leetcode.com/problems/minimum-absolute-difference/
export default function minimumAbsDifference(
  arr: number[]
): [number, number][] {
  arr.sort((a, b) => a - b);

  let pairs: [number, number][] = [];
  let minimumDiff = Infinity;

  for (let i = 0; i < arr.length - 1; ++i) {
    const diff = arr[i + 1] - arr[i];

    if (diff > minimumDiff) continue;

    if (diff === minimumDiff) {
      pairs.push([arr[i], arr[i + 1]]);
    } else if (diff < minimumDiff) {
      pairs = [[arr[i], arr[i + 1]]];
    }

    minimumDiff = diff;
  }

  return pairs;
}
