import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import mostCommonWord from "./most_common_word.ts";

test("819. Most Common Word", () => {
  assertStrictEq(
    mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
      "hit"
    ]),
    "ball"
  );
  assertStrictEq(
    mostCommonWord(
      "Bob hit a ball, the hit BALL flew far after it was hit.",
      []
    ),
    "hit"
  );
  assertStrictEq(mostCommonWord("Bob", []), "bob");
  assertStrictEq(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]), "b");
});
