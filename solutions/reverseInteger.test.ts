import reverse from "./reverseInteger";

describe("7. Reverse Integer", () => {
  const TEST_CASES = new Map([
    [123, 321],
    [-123, -321],
    [-12, -21],
    [120, 21],
    [1563847412, 0]
  ]);

  for (const [number, expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${number}`, () => {
      expect(reverse(number)).toEqual(expected);
    });
  }
});
