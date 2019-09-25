import maxProfit from "./bestTimeToBuyAndSellStock";

describe("121. Best Time to Buy and Sell Stock", () => {
  const TEST_CASES = new Map([
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 4, 3, 1], 0],
    [[7, 6, 5, 2, 3, 4, 1], 2],
    [[7, 3, 8, 1, 2, 5, 4], 5]
  ]);

  for (const [prices, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${prices}]`, () => {
      expect(maxProfit(prices)).toBe(expected);
    });
  }
});
