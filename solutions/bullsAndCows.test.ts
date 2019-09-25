import getHint from "./bullsAndCows";

describe("299. Bulls and Cows", () => {
  const TEST_CASES = new Map([
    [["1807", "7810"], "1A3B"],
    [["1123", "0111"], "1A1B"],
    [["1234", "5678"], "0A0B"],
    [["1234", "1234"], "4A0B"],
    [["1234", "4123"], "0A4B"],
    [["1122", "0001"], "0A1B"],
    [["11", "10"], "1A0B"]
  ]);

  for (const [[secret, guess], expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${secret} and ${guess}`, () => {
      expect(getHint(secret, guess)).toBe(expected);
    });
  }
});
