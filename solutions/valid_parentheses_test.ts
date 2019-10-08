import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import isValid from "./valid_parentheses.ts";

test("20. Valid Parentheses", () => {
  assertStrictEq(isValid("()"), true);
  assertStrictEq(isValid("()[]{}"), true);
  assertStrictEq(isValid("(]"), false);
  assertStrictEq(isValid("([)]"), false);
  assertStrictEq(isValid("{[]}"), true);
  assertStrictEq(isValid("["), false);
  assertStrictEq(isValid("[{"), false);
});
