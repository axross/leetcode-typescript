import maxProfit from "./bestTimeToBuyAndSellStock";

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
