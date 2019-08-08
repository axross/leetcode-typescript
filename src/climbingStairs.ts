// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/
function climbStairs(n: number): number {
  if (memo.has(n)) {
    return memo.get(n)!;
  }

  const result = climbStairs(n - 1) + climbStairs(n - 2);

  memo.set(n, result);

  return result;
}

const memo = new Map<number, number>([[1, 1], [2, 2]]);

describe("70. Climbing Stairs", () => {
  test("#1", () => {
    expect(climbStairs(1)).toBe(1);
  });

  test("#2", () => {
    expect(climbStairs(2)).toBe(2);
  });

  test("#3", () => {
    expect(climbStairs(3)).toBe(3);
  });

  test("#4", () => {
    expect(climbStairs(4)).toBe(5);
  });

  test("#5", () => {
    expect(climbStairs(32)).toBe(3524578);
  });
});
