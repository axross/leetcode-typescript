import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import firstUniqChar from "./first_unique_character_in_a_string.ts";

test("387. First Unique Character in a String", () => {
  assert(firstUniqChar("leetcode") === 0);
  assert(firstUniqChar("loveleetcode") === 2);
  assert(firstUniqChar("leetcodeleetcode") === -1);
  assert(firstUniqChar("theleetcode") === 1);
  assert(firstUniqChar("j") === 0);
  assert(firstUniqChar("") === -1);
});
