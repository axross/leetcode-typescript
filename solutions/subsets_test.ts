import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import subsets from "./subsets.ts";

test("78. Subsets", () => {
  assertEquals(
    subsets([1, 2, 3]).sort(),
    [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []].sort()
  );
});
