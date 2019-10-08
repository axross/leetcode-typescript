import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import backspaceCompare from "./backspace_string_compare.ts";

test("844. Backspace String Compare", () => {
  assertStrictEq(backspaceCompare("ab#c", "ad#c"), true);
  assertStrictEq(backspaceCompare("ab##", "c#d#"), true);
  assertStrictEq(backspaceCompare("a##c", "#a#c"), true);
  assertStrictEq(backspaceCompare("a#c", "b"), false);
});
