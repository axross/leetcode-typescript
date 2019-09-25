import isStrobogrammatic from "./strobogrammaticNumber";

describe("246. Strobogrammatic Number", () => {
  const TEST_CASES = new Map([
    ["69", true],
    ["818", true],
    ["962", false],
    ["1818", false],
    ["0", true],
    ["6", false],
    ["", true]
  ]);

  for (const [num, expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${num}`, () => {
      expect(isStrobogrammatic(num)).toBe(expected);
    });
  }
});
