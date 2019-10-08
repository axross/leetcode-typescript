import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import reverse from "./reverse_integer.ts";

test("7. Reverse Integer", () => {
  assertStrictEq(reverse(123), 321);
  assertStrictEq(reverse(-123), -321);
  assertStrictEq(reverse(-12), -21);
  assertStrictEq(reverse(120), 21);
  assertStrictEq(reverse(1563847412), 0);
});
