import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import isAlienSorted from "./verifying_an_alien_dictionary.ts";

test("953. Verifying an Alien Dictionary", () => {
  assert(
    isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz") === true
  );
  assert(
    isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz") ===
      false
  );
  assert(
    isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz") === false
  );
});
