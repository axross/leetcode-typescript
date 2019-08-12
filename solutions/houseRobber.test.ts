import rob from "./houseRobber";

describe("198. House Robber", () => {
  test("#1", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });

  test("#2", () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });

  test("#3", () => {
    expect(rob([2, 4, 9, 3, 1, 5])).toBe(16);
  });
});
