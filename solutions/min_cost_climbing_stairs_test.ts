import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import minCostClimbingStairs from "./min_cost_climbing_stairs.ts";

test("746. Min Cost Climbing Stairs", () => {
  assertStrictEq(minCostClimbingStairs([10, 15, 20]), 15);
  assertStrictEq(
    minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]),
    6
  );
});
