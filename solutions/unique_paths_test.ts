import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import uniquePaths from "./unique_paths.ts";

test("62. Unique Paths", () => {
  assert(uniquePaths(3, 2) === 3);
  assert(uniquePaths(7, 3) === 28);
});
