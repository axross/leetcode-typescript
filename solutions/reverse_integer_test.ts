import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import reverse from "./reverse_integer.ts";

test("7. Reverse Integer", () => {
  assert(reverse(123) === 321);
  assert(reverse(-123) === -321);
  assert(reverse(-12) === -21);
  assert(reverse(120) === 21);
  assert(reverse(1563847412) === 0);
});
