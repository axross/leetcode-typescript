import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import addBinary from "./add_binary.ts";

test("67. Add Binary", () => {
  assert(addBinary("11", "1") === "100");
  assert(addBinary("1010", "1011") === "10101");
});
