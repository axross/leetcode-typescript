// 845. Longest Mountain in Array
// https://leetcode.com/problems/longest-mountain-in-array/
export default function longestMountain(a: number[]) {
  let longestMountainLength = 0;
  let mountainFrom = a.length;

  for (let i = 1; i < a.length; ++i) {
    const beforePrevious = i >= 2 ? a[i - 2] : Infinity;
    const previous = a[i - 1];
    const current = a[i];

    // update mountainFrom to before when the previous is the foot of a mountain
    if (current > previous && previous <= beforePrevious) {
      mountainFrom = i - 1;
      continue;
    }

    // update mountainFrom to current when there's flat terrain between current and beforePrevious
    if (current === previous || beforePrevious === previous) {
      mountainFrom = i;
      continue;
    }

    // start counting mountain length in down trend
    if (current < previous) {
      longestMountainLength = Math.max(
        longestMountainLength,
        i - mountainFrom + 1
      );
    }
  }

  return longestMountainLength >= 3 ? longestMountainLength : 0;
}
