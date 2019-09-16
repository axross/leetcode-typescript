import findPeakElement from "./findPeakElement";

const TEST_CASES = new Map([
  [[1, 2, 3, 1], [2]],
  [[1, 2, 1, 3, 5, 6, 4], [1, 5]],
  [[2, 1], [0]],
  [[1], [0]]
]);

describe("162. Find Peak Element", () => {
  for (const [testCase, answers] of TEST_CASES.entries()) {
    test(`when [${testCase.join(", ")}]`, () => {
      expect(answers.includes(findPeakElement(testCase))).toBeTruthy();
    });
  }
});
