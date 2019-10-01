import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import backspaceCompare from "./backspace_string_compare.ts";

test("844. Backspace String Compare", () => {
  assert(backspaceCompare("ab#c", "ad#c") === true);
  assert(backspaceCompare("ab##", "c#d#") === true);
  assert(backspaceCompare("a##c", "#a#c") === true);
  assert(backspaceCompare("a#c", "b") === false);
});
