import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import findTheDifference from "./find_the_difference.ts";

test("389. Find the Difference", () => {
  assertStrictEq(findTheDifference("abcd", "abcde"), "e");
  assertStrictEq(findTheDifference("abcdd", "abdcdd"), "d");
});
