// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < prices.length; ++i) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (maxProfit < prices[i] - minPrice) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}

describe("121. Best Time to Buy and Sell Stock", () => {
  test("#1", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test("#2", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test("#3", () => {
    expect(maxProfit([7, 6, 5, 2, 3, 4, 1])).toBe(2);
  });

  test("#4", () => {
    expect(maxProfit([7, 3, 8, 1, 2, 5, 4])).toBe(5);
  });
});
