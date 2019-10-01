// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/
export default function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  const base = strs[0];
  const others = strs.slice(1);
  let searchFrom = 0;
  let searchTo = base.length;

  // do binary search
  while (searchFrom < searchTo) {
    const middle = Math.ceil((searchFrom + searchTo) / 2);
    const compareTarget = base.slice(0, middle);

    if (others.every(str => str.slice(0, middle) === compareTarget)) {
      searchFrom = middle;
    } else {
      searchTo = middle - 1;
    }
  }

  return base.slice(0, searchFrom);
}
