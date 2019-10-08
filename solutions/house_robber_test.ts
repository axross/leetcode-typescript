import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import rob from "./house_robber.ts";

test("198. House Robber", () => {
  assertStrictEq(rob([1, 2, 3, 1]), 4);
  assertStrictEq(rob([2, 7, 9, 3, 1]), 12);
  assertStrictEq(rob([2, 4, 9, 3, 1, 5]), 16);
});
