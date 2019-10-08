import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import repeatedNTimes from "./n_repeated_element_in_size_2n_array.ts";

test("961. N-Repeated Element in Size 2N Array", () => {
  assertStrictEq(repeatedNTimes([1, 2, 3, 3]), 3);
  assertStrictEq(repeatedNTimes([2, 1, 2, 5, 3, 2]), 2);
  assertStrictEq(repeatedNTimes([2, 1, 2, 5, 3, 2]), 2);
  assertStrictEq(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]), 5);
});
