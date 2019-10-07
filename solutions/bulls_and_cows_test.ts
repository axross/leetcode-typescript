import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import getHint from "./bulls_and_cows.ts";

test("299. Bulls and Cows", () => {
  assert(getHint("1807", "7810") === "1A3B");
  assert(getHint("1123", "0111") === "1A1B");
  assert(getHint("1234", "5678") === "0A0B");
  assert(getHint("1234", "1234") === "4A0B");
  assert(getHint("1234", "4123") === "0A4B");
  assert(getHint("1122", "0001") === "0A1B");
  assert(getHint("11", "10") === "1A0B");
});
