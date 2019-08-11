// 278. First Bad Version
// https://leetcode.com/problems/first-bad-version/
function solution(isBadVersion: IsBadVersion): FindFirstBadVersion {
  return n => {
    let from = 1;
    let to = n + 1;
    let firstBadVersion = 0;

    while (from <= to) {
      const middle = Math.trunc((from + to) / 2);

      if (isBadVersion(middle)) {
        firstBadVersion = middle;
        to = middle - 1;
      } else {
        from = middle + 1;
      }
    }

    return firstBadVersion;
  };
}

type IsBadVersion = (version: number) => boolean;
type FindFirstBadVersion = (n: number) => number;

export default solution;
