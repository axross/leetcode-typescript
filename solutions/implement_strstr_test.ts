import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import strStr from "./implement_strstr.ts";

test("28. Implement strStr()", () => {
  assert(strStr("hello", "ll") === 2);
  assert(strStr("aaaaa", "bba") === -1);
  assert(strStr("llooll", "ll") === 0);
  assert(strStr("llooll", "ool") === 2);
  assert(strStr("hello", "") === 0);
  assert(strStr("", "a") === -1);
  assert(strStr("", "") === 0);
  assert(strStr("aaa", "aaaa") === -1);
  assert(strStr("hello", "lo") === 3);
});
