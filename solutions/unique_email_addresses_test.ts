import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import numUniqueEmails from "./unique_email_addresses.ts";

test("929. Unique Email Addresses", () => {
  assertStrictEq(
    numUniqueEmails([
      "test.email+alex@leetcode.com",
      "test.e.mail+bob.cathy@leetcode.com",
      "testemail+david@lee.tcode.com"
    ]),
    2
  );
  assertStrictEq(
    numUniqueEmails([
      "testemail@leetcode.com",
      "testemail1@leetcode.com",
      "testemail+david@lee.tcode.com"
    ]),
    3
  );
});
