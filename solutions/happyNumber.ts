// 202. Happy Number
// https://leetcode.com/problems/happy-number/
function isHappy(n: number): boolean {
  if (n === 1) return true;

  // any non-happy number is going to be 4 at certain point
  if (n === 4) return false;

  return isHappy(
    `${n}`
      .split("")
      .reduce((total, digit) => total + Math.pow(parseInt(digit), 2), 0)
  );
}

export default isHappy;
