import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import removeVowels from "./remove_vowels_from_a_string.ts";

test("1119. Remove Vowels from a String", () => {
  assertEquals(
    removeVowels("leetcodeisacommunityforcoders"),
    "ltcdscmmntyfrcdrs"
  );
  assertEquals(removeVowels("aeiou"), "");
});
