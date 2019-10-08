import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import numJewelsInStones from "./jewels_and_stones.ts";

test("771. Jewels and Stones", () => {
  assertStrictEq(numJewelsInStones("aA", "aAAbbbb"), 3);
  assertStrictEq(numJewelsInStones("z", "ZZ"), 0);
});
