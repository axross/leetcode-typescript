import isHappy from "./happyNumber";

describe("202. Happy Number", () => {
  test("#1", () => {
    expect(isHappy(19)).toBe(true);
  });

  test("#2", () => {
    expect(isHappy(18)).toBe(false);
  });
});
