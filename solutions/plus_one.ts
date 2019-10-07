// 66. Plus One
// https://leetcode.com/problems/plus-one/
export default function plusOne(digits: number[]): number[] {
  if (digits.length === 1) {
    return digits[0] <= 8 ? [digits[0] + 1] : [1, 0];
  }

  const lastDigits = plusOne(digits.slice(-1));

  if (lastDigits.length === 2) {
    return [...plusOne(digits.slice(0, -1)), lastDigits[1]];
  } else {
    return [...digits.slice(0, -1), lastDigits[0]];
  }
}
