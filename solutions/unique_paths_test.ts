import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import uniquePaths from "./unique_paths.ts";

test("62. Unique Paths", () => {
  assertStrictEq(uniquePaths(3, 2), 3);
  assertStrictEq(uniquePaths(7, 3), 28);
});
