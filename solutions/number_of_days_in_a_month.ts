// 1118. Number of Days in a Month
// https://leetcode.com/problems/number-of-days-in-a-month/
export default function numberOfDays(Y: number, M: number): number {
  switch (M) {
    case 2:
      return Y % 400 === 0 || (Y % 4 === 0 && Y % 100 !== 0) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
}
