import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import isAnagram from "./valid_anagram.ts";

test("242. Valid Anagram", () => {
  assert(isAnagram("anagram", "nagaram") === true);
  assert(isAnagram("car", "rat") === false);
  assert(isAnagram("a", "aa") === false);
});
