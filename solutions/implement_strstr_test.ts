import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import strStr from "./implement_strstr.ts";

test("28. Implement strStr()", () => {
  assertStrictEq(strStr("hello", "ll"), 2);
  assertStrictEq(strStr("aaaaa", "bba"), -1);
  assertStrictEq(strStr("llooll", "ll"), 0);
  assertStrictEq(strStr("llooll", "ool"), 2);
  assertStrictEq(strStr("hello", ""), 0);
  assertStrictEq(strStr("", "a"), -1);
  assertStrictEq(strStr("", ""), 0);
  assertStrictEq(strStr("aaa", "aaaa"), -1);
  assertStrictEq(strStr("hello", "lo"), 3);
});
