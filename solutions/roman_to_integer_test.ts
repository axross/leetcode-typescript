import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import romanToInt from "./roman_to_integer.ts";

test("13. Roman to Integer", () => {
  assert(romanToInt("VI") === 6);
  assert(romanToInt("IV") === 4);
  assert(romanToInt("III") === 3);
  assert(romanToInt("IIII") === 4);
  assert(romanToInt("XIII") === 13);
  assert(romanToInt("MDCLXVI") === 1666);
  assert(romanToInt("MCDCXLXIV") === 1554);
  assert(romanToInt("CMCDXCXLIXIV") === 1443);
});
