import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import mostCommonWord from "./most_common_word.ts";

test("819. Most Common Word", () => {
  assert(
    mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
      "hit"
    ]) === "ball"
  );
  assert(
    mostCommonWord(
      "Bob hit a ball, the hit BALL flew far after it was hit.",
      []
    ) === "hit"
  );
  assert(mostCommonWord("Bob", []) === "bob");
  assert(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]) === "b");
});
