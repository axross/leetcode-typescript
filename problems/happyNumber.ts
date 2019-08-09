// 202. Happy Number
// https://leetcode.com/problems/happy-number/
function isHappy(n: number): boolean {
  if (n === 1) return true;

  // any non-happy number is going to be 2, 3, 4, 5, 6 at certain point
  if (n < 7) return false;

  return isHappy(
    `${n}`
      .split("")
      .reduce((total, digit) => total + Math.pow(parseInt(digit), 2), 0)
  );
}

describe("202. Happy Number", () => {
  test("#1", () => {
    expect(isHappy(19)).toBe(true);
  });

  test("#2", () => {
    expect(isHappy(18)).toBe(false);
  });
});
