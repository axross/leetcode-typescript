// 658. Find K Closest Elements
// https://leetcode.com/problems/find-k-closest-elements/
export default function findClosestElements(
  arr: number[],
  k: number,
  x: number
) {
  let from = 0;
  let to = arr.length - k;

  while (from < to) {
    const middle = Math.floor((from + to) / 2);

    if (Math.abs(x - arr[middle]) > Math.abs(x - arr[middle + k])) {
      from = middle + 1;
    } else {
      to = middle;
    }
  }

  return arr.slice(from, from + k);
}
