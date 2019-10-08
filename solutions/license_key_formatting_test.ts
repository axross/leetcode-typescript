import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import licenseKeyFormatting from "./license_key_formatting.ts";

test("482. License Key Formatting", () => {
  assertStrictEq(licenseKeyFormatting("5F3Z-2e-9-w", 4), "5F3Z-2E9W");
  assertStrictEq(licenseKeyFormatting("2-5g-3-J", 2), "2-5G-3J");
});
