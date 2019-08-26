// 646. Maximum Length of Pair Chain
// https://leetcode.com/problems/maximum-length-of-pair-chain/
export default function findLongestChain(pairs: [number, number][]): number {
  if (pairs.length === 0) return 0;

  // dynamic programming solution
  // see
  let last = Number.POSITIVE_INFINITY;
  let chains = 1;

  // sort the array of pairs
  // from [[3, 4], [2, 3], [1, 2]]
  // into [[1, 2], [2, 3], [3, 4]]
  pairs.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < pairs.length; ++i) {
    [last, chains] =
      pairs[i][0] > last
        ? [pairs[i][1], chains + 1]
        : [Math.min(pairs[i][1], last), chains];
  }

  return chains;
}
