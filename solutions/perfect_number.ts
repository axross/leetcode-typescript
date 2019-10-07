// 507. Perfect Number
// https://leetcode.com/problems/perfect-number/
export default function checkPerfectNumber(num: number): boolean {
  // this problem sucks.
  return [6, 28, 496, 8128, 33550336].includes(num);
}
