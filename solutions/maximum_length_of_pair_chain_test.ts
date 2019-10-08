import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import findLongestChain from "./maximum_length_of_pair_chain.ts";

test("646. Maximum Length of Pair Chain", () => {
  assertStrictEq(findLongestChain([[1, 2], [2, 3], [3, 4]]), 2);
  assertStrictEq(findLongestChain([[3, 4], [2, 3], [1, 2]]), 2);
  assertStrictEq(findLongestChain([[1, 2]]), 1);
});
