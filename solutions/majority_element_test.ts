import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import majorityElement from "./majority_element.ts";

test("169. Majority Element", () => {
  assertStrictEq(majorityElement([3, 2, 3]), 3);
  assertStrictEq(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
});
