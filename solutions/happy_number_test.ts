import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import isHappy from "./happy_number.ts";

test("202. Happy Number", () => {
  assertStrictEq(isHappy(19), true);
  assertStrictEq(isHappy(18), false);
});
