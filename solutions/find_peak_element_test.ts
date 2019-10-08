import { test } from "https://deno.land/std/testing/mod.ts";
import {
  assert,
  assertStrictEq
} from "https://deno.land/std/testing/asserts.ts";
import findPeakElement from "./find_peak_element.ts";

test("162. Find Peak Element", () => {
  assertStrictEq(findPeakElement([1, 2, 3, 1]), 2);
  assert([1, 5].includes(findPeakElement([1, 2, 1, 3, 5, 6, 4])));
  assertStrictEq(findPeakElement([2, 1]), 0);
  assertStrictEq(findPeakElement([1]), 0);
});
