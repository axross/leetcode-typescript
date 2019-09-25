import minCost from "./paintHouse";

describe("256. Paint House", () => {
  const TEST_CASES = new Map<[number, number, number][], number>([
    [[[17, 2, 17], [16, 16, 5], [14, 3, 19]], 10],
    [[[17, 2, 17], [16, 16, 5], [30, 3, 19], [4, 8, 2], [10, 15, 11]], 22],
    [[[5, 8, 6], [19, 14, 13], [7, 5, 12], [14, 15, 17], [3, 20, 10]], 43],
    [[[5, 8, 6], [19, 14, 13], [7, 5, 12], [14, 15, 20], [3, 20, 10]], 43]
  ]);

  for (const [houses, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${houses.map(
      house => `[${house}]`
    )}]`, () => {
      expect(minCost(houses)).toEqual(expected);
    });
  }
});
