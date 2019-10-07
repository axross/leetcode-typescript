// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/
export default function intersection(
  nums1: number[],
  nums2: number[]
): number[] {
  const set = new Set();
  const result: number[] = [];

  for (const num of nums1) {
    set.add(num);
  }

  for (const num of nums2) {
    if (set.has(num)) {
      result.push(num);
      set.delete(num);
    }
  }

  return result;
}
