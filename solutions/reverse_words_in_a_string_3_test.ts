import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import reverseWords from "./reverse_words_in_a_string_3.ts";

test("557. Reverse Words in a String III", () => {
  assert(
    reverseWords("Let's take LeetCode contest") ===
      "s'teL ekat edoCteeL tsetnoc"
  );
});
