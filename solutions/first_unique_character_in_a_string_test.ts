import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import firstUniqChar from "./first_unique_character_in_a_string.ts";

test("387. First Unique Character in a String", () => {
  assertStrictEq(firstUniqChar("leetcode"), 0);
  assertStrictEq(firstUniqChar("loveleetcode"), 2);
  assertStrictEq(firstUniqChar("leetcodeleetcode"), -1);
  assertStrictEq(firstUniqChar("theleetcode"), 1);
  assertStrictEq(firstUniqChar("j"), 0);
  assertStrictEq(firstUniqChar(""), -1);
});
