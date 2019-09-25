import fizzBuzz from "./fizzBuzz";

describe("412. Fizz Buzz", () => {
  const TEST_CASES = new Map([
    [1, ["1"]],
    [3, ["1", "2", "Fizz"]],
    [5, ["1", "2", "Fizz", "4", "Buzz"]],
    [
      20,
      [
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz",
        "16",
        "17",
        "Fizz",
        "19",
        "Buzz"
      ]
    ]
  ]);

  for (const [n, expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${n}`, () => {
      expect(fizzBuzz(n)).toBe(expected);
    });
  }
});
