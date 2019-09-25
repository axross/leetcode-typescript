import addBinary from "./addBinary";

describe("67. Add Binary", () => {
  const TEST_CASES = new Map([
    [["11", "1"], "100"],
    [["1010", "1011"], "10101"]
  ]);

  for (const [[a, b], expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${a} and ${b}`, () => {
      expect(addBinary(a, b)).toBe(expected);
    });
  }
});
