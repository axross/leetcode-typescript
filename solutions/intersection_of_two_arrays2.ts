// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/
export default function intersect(nums1: number[], nums2: number[]): number[] {
  const intersection: number[] = [];
  const sorted1 = [...nums1].sort((a, b) => a - b);
  const sorted2 = [...nums2].sort((a, b) => a - b);

  let i1 = 0;
  let i2 = 0;

  while (i1 < sorted1.length && i2 < sorted2.length) {
    if (sorted1[i1] === sorted2[i2]) {
      intersection.push(sorted1[i1]);

      i1 += 1;
      i2 += 1;
    } else if (sorted1[i1] < sorted2[i2]) {
      i1 += 1;
    } else if (sorted1[i1] > sorted2[i2]) {
      i2 += 1;
    }
  }

  return intersection;
}
