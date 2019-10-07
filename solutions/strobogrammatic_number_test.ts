import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import isStrobogrammatic from "./strobogrammatic_number.ts";

test("246. Strobogrammatic Number", () => {
  assert(isStrobogrammatic("69") === true);
  assert(isStrobogrammatic("818") === true);
  assert(isStrobogrammatic("962") === false);
  assert(isStrobogrammatic("1818") === false);
  assert(isStrobogrammatic("0") === true);
  assert(isStrobogrammatic("6") === false);
  assert(isStrobogrammatic("") === true);
});
