import findPeakElement from "./findPeakElement";

describe("162. Find Peak Element", () => {
  const TEST_CASES = new Map([
    [[1, 2, 3, 1], [2]],
    [[1, 2, 1, 3, 5, 6, 4], [1, 5]],
    [[2, 1], [0]],
    [[1], [0]]
  ]);

  for (const [testCase, expectedOneOf] of TEST_CASES) {
    it(`returns ${
      expectedOneOf.length === 1
        ? expectedOneOf[0]
        : "either " +
          expectedOneOf.reduce(
            (s, v, i) =>
              i === expectedOneOf.length - 1
                ? `${s} or ${v}`
                : i > 0
                ? `${s}, ${v}`
                : `${v}`,
            ""
          )
    } when [${testCase}]`, () => {
      expect(expectedOneOf.includes(findPeakElement(testCase))).toBeTruthy();
    });
  }
});
