import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import isHappy from "./happy_number.ts";

test("202. Happy Number", () => {
  assert(isHappy(19) === true);
  assert(isHappy(18) === false);
});
