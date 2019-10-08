import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import isAnagram from "./valid_anagram.ts";

test("242. Valid Anagram", () => {
  assertStrictEq(isAnagram("anagram", "nagaram"), true);
  assertStrictEq(isAnagram("car", "rat"), false);
  assertStrictEq(isAnagram("a", "aa"), false);
});
