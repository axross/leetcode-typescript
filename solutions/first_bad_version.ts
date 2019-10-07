// 278. First Bad Version
// https://leetcode.com/problems/first-bad-version/
export default function solution(
  isBadVersion: IsBadVersion
): FindFirstBadVersion {
  return n => {
    let from = 1;
    let to = n + 1;

    while (from < to) {
      let middle = Math.floor((from + to) / 2);

      if (isBadVersion(middle)) {
        to = middle;
      } else {
        from = middle + 1;
      }
    }

    return from;
  };
}

type IsBadVersion = (version: number) => boolean;
type FindFirstBadVersion = (n: number) => number;
