import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import maxProfit from "./best_time_to_buy_and_sell_stock.ts";

test("121. Best Time to Buy and Sell Stock", () => {
  assertStrictEq(maxProfit([7, 1, 5, 3, 6, 4]), 5);
  assertStrictEq(maxProfit([7, 6, 4, 3, 1]), 0);
  assertStrictEq(maxProfit([7, 6, 5, 2, 3, 4, 1]), 2);
  assertStrictEq(maxProfit([7, 3, 8, 1, 2, 5, 4]), 5);
});
