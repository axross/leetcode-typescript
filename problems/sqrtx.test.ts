import mySqrt from "./sqrtx";

describe("69. Sqrt(x)", () => {
  test("#1", () => {
    expect(mySqrt(16)).toBe(4);
  });

  test("#2", () => {
    expect(mySqrt(17)).toBe(4);
  });

  test("#3", () => {
    expect(mySqrt(15)).toBe(3);
  });

  test("#4", () => {
    expect(mySqrt(1)).toBe(1);
  });

  test("#5", () => {
    expect(mySqrt(0)).toBe(0);
  });

  test("#6", () => {
    expect(mySqrt(Number.MAX_SAFE_INTEGER)).toBe(94906265);
  });
});
