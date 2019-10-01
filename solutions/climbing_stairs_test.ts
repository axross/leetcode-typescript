import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import climbStairs from "./climbing_stairs.ts";

test("70. Climbing Stairs", () => {
  assert(climbStairs(1) === 1);
  assert(climbStairs(2) === 2);
  assert(climbStairs(3) === 3);
  assert(climbStairs(4) === 5);
  assert(climbStairs(32) === 3524578);
});
