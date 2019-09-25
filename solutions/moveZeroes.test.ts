import moveZeroes from "./moveZeroes";

describe("283. Move Zeroes", () => {
  const TEST_CASES = new Map([[[0, 1, 0, 3, 12], [1, 3, 12, 0, 0]]]);

  for (const [nums, expected] of TEST_CASES) {
    it(`moves zeroes to the tail for [${nums}] to be [${expected}]`, () => {
      const array = [...nums];

      moveZeroes(array);

      expect(array).toEqual(expected);
    });
  }
});
