import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import minCostClimbingStairs from "./min_cost_climbing_stairs.ts";

test("746. Min Cost Climbing Stairs", () => {
  assert(minCostClimbingStairs([10, 15, 20]) === 15);
  assert(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]) === 6);
});
