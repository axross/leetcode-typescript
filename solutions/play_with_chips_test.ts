import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import minCostToMoveChips from "./play_with_chips.ts";

test("1217. Play with Chips", () => {
  assertStrictEq(minCostToMoveChips([1, 2, 3]), 1);
  assertStrictEq(minCostToMoveChips([2, 2, 2, 3, 3]), 2);
  assertStrictEq(minCostToMoveChips([1, 2, 3, 4, 5, 6, 7, 8, 9]), 4);
});
