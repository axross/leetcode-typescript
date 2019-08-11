import climbStairs from "./climbingStairs";

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
