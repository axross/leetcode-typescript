import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import maxProfit from "./best_time_to_buy_and_sell_stock.ts";

test("121. Best Time to Buy and Sell Stock", () => {
  assert(maxProfit([7, 1, 5, 3, 6, 4]) === 5);
  assert(maxProfit([7, 6, 4, 3, 1]) === 0);
  assert(maxProfit([7, 6, 5, 2, 3, 4, 1]) === 2);
  assert(maxProfit([7, 3, 8, 1, 2, 5, 4]) === 5);
});
