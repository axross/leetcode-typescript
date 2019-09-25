import mySqrt from "./sqrtx";

describe("69. Sqrt(x)", () => {
  const TEST_CASES = new Map([
    [16, 4],
    [17, 4],
    [15, 3],
    [8, 2],
    [1, 1],
    [0, 0],
    [Number.MAX_SAFE_INTEGER, 94906265]
  ]);

  for (const [x, expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${x}`, () => {
      expect(mySqrt(x)).toBe(expected);
    });
  }
});
