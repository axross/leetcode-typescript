import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import isValid from "./valid_parentheses.ts";

test("20. Valid Parentheses", () => {
  assert(isValid("()") === true);
  assert(isValid("()[]{}") === true);
  assert(isValid("(]") === false);
  assert(isValid("([)]") === false);
  assert(isValid("{[]}") === true);
  assert(isValid("[") === false);
  assert(isValid("[{") === false);
});
