import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import romanToInt from "./roman_to_integer.ts";

test("13. Roman to Integer", () => {
  assertStrictEq(romanToInt("VI"), 6);
  assertStrictEq(romanToInt("IV"), 4);
  assertStrictEq(romanToInt("III"), 3);
  assertStrictEq(romanToInt("IIII"), 4);
  assertStrictEq(romanToInt("XIII"), 13);
  assertStrictEq(romanToInt("MDCLXVI"), 1666);
  assertStrictEq(romanToInt("MCDCXLXIV"), 1554);
  assertStrictEq(romanToInt("CMCDXCXLIXIV"), 1443);
});
