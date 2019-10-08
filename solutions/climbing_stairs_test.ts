import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import climbStairs from "./climbing_stairs.ts";

test("70. Climbing Stairs", () => {
  assertStrictEq(climbStairs(1), 1);
  assertStrictEq(climbStairs(2), 2);
  assertStrictEq(climbStairs(3), 3);
  assertStrictEq(climbStairs(4), 5);
  assertStrictEq(climbStairs(32), 3524578);
});
