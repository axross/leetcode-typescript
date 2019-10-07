import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import rob from "./house_robber.ts";

test("198. House Robber", () => {
  assert(rob([1, 2, 3, 1]) === 4);
  assert(rob([2, 7, 9, 3, 1]) === 12);
  assert(rob([2, 4, 9, 3, 1, 5]) === 16);
});
