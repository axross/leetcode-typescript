// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer/
export default function reverse(x: number): number {
  let currentX = x;
  let reversedX = 0;

  // n = digits of the x. exp is n, n-1, n-2, ... 0
  for (let exp = Math.floor(Math.log10(Math.abs(x))); exp >= 0; --exp) {
    // add to reversedX as proper digit
    reversedX += (currentX % 10) * Math.pow(10, exp);

    currentX = Math.trunc(currentX / 10);
  }

  // if it exceeds 32-bit int, returns 0
  return reversedX >= Math.pow(-2, 31) && reversedX < Math.pow(2, 31)
    ? reversedX
    : 0;
}
