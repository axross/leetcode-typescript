import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import isStrobogrammatic from "./strobogrammatic_number.ts";

test("246. Strobogrammatic Number", () => {
  assertStrictEq(isStrobogrammatic("69"), true);
  assertStrictEq(isStrobogrammatic("818"), true);
  assertStrictEq(isStrobogrammatic("962"), false);
  assertStrictEq(isStrobogrammatic("1818"), false);
  assertStrictEq(isStrobogrammatic("0"), true);
  assertStrictEq(isStrobogrammatic("6"), false);
  assertStrictEq(isStrobogrammatic(""), true);
});
