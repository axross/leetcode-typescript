import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import decodeString from "./decode_string.ts";

test("394. Decode String", () => {
  assertStrictEq(decodeString("3[a]2[bc]"), "aaabcbc");
  assertStrictEq(decodeString("3[a2[c]]"), "accaccacc");
  assertStrictEq(decodeString("2[abc]3[cd]ef"), "abcabccdcdcdef");
  assertStrictEq(
    decodeString("a2[b3[c4[d]e]]f3[g]h"),
    "abcddddecddddecddddebcddddecddddecddddefgggh"
  );
});
