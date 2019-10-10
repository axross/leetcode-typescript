import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import numberOfDays from "./number_of_days_in_a_month.ts";

test("1118. Number of Days in a Month", () => {
  assertStrictEq(numberOfDays(1992, 7), 31);
  assertStrictEq(numberOfDays(2000, 2), 29);
  assertStrictEq(numberOfDays(1900, 2), 28);
});
