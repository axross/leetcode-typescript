import findJudge from "./findTheTownJudge";

describe("997. Find the Town Judge", () => {
  const TEST_CASES = new Map<[number, [number, number][]], number>([
    [[2, [[1, 2]]], 2],
    [[3, [[1, 3], [2, 3]]], 3],
    [[3, [[1, 3], [2, 3], [3, 1]]], -1],
    [[3, [[1, 2], [2, 3]]], -1],
    [[4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]], 3],
    [[1, []], 1]
  ]);

  for (const [[n, trust], expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${n} and [${trust}]`, () => {
      expect(findJudge(n, trust)).toBe(expected);
    });
  }
});
