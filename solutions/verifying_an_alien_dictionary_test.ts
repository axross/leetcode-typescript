import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import isAlienSorted from "./verifying_an_alien_dictionary.ts";

test("953. Verifying an Alien Dictionary", () => {
  assertStrictEq(
    isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"),
    true
  );
  assertStrictEq(
    isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"),
    false
  );
  assertStrictEq(
    isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"),
    false
  );
});
