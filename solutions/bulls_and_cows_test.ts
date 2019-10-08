import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import getHint from "./bulls_and_cows.ts";

test("299. Bulls and Cows", () => {
  assertStrictEq(getHint("1807", "7810"), "1A3B");
  assertStrictEq(getHint("1123", "0111"), "1A1B");
  assertStrictEq(getHint("1234", "5678"), "0A0B");
  assertStrictEq(getHint("1234", "1234"), "4A0B");
  assertStrictEq(getHint("1234", "4123"), "0A4B");
  assertStrictEq(getHint("1122", "0001"), "0A1B");
  assertStrictEq(getHint("11", "10"), "1A0B");
});
