import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import countVowelPermutation from "./count_vowels_permutation.ts";

test("1220. Count Vowels Permutation", () => {
  assertStrictEq(countVowelPermutation(1), 5);
  assertStrictEq(countVowelPermutation(2), 10);
  assertStrictEq(countVowelPermutation(5), 68);
  assertStrictEq(countVowelPermutation(144), 18208803);
  assertStrictEq(countVowelPermutation(2000), 793084836);
  assertStrictEq(countVowelPermutation(0), 1);
});
