import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import getMaximumGold from "./path_with_maximum_gold.ts";

test("1219. Path with Maximum Gold", () => {
  assert(getMaximumGold([[0, 6, 0], [5, 8, 7], [0, 9, 0]]) === 24);
  assert(
    getMaximumGold([[1, 0, 7], [2, 0, 6], [3, 4, 5], [0, 3, 0], [9, 0, 20]]) ===
      28
  );
});
