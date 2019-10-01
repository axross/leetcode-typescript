import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import majorityElement from "./majority_element.ts";

test("169. Majority Element", () => {
  assert(majorityElement([3, 2, 3]) === 3);
  assert(majorityElement([2, 2, 1, 1, 1, 2, 2]) === 2);
});
