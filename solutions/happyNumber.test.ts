import isHappy from "./happyNumber";

describe("202. Happy Number", () => {
  const TEST_CASES = new Map([[19, true], [18, false]]);

  for (const [n, expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${n}`, () => {
      expect(isHappy(n)).toBe(expected);
    });
  }
});
