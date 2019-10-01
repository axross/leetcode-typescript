import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import licenseKeyFormatting from "./license_key_formatting.ts";

test("482. License Key Formatting", () => {
  assert(licenseKeyFormatting("5F3Z-2e-9-w", 4) === "5F3Z-2E9W");
  assert(licenseKeyFormatting("2-5g-3-J", 2) === "2-5G-3J");
});
