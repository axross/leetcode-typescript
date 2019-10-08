import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import addBinary from "./add_binary.ts";

test("67. Add Binary", () => {
  assertStrictEq(addBinary("11", "1"), "100");
  assertStrictEq(addBinary("1010", "1011"), "10101");
});
