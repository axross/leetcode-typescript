import reverseString from "./reverseString";

describe("344. Reverse String", () => {
  const TEST_CASES = new Map([
    [["h", "e", "l", "l", "o"], ["o", "l", "l", "e", "h"]],
    [["H", "a", "n", "n", "a", "h"], ["h", "a", "n", "n", "a", "H"]]
  ]);

  for (const [chars, expected] of TEST_CASES) {
    it(`reverses [${chars}] to be [${expected}]`, () => {
      const characters = [...chars];

      reverseString(characters);

      expect(characters).toEqual(expected);
    });
  }
});
