import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import plusOne from "./plus_one.ts";

test("66. Plus One", () => {
  assertEquals(plusOne([1, 2, 3]), [1, 2, 4]);
  assertEquals(plusOne([1, 2, 9]), [1, 3, 0]);
  assertEquals(plusOne([9, 9, 9]), [1, 0, 0, 0]);
  assertEquals(
    plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]),
    [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
  );
  assertEquals(plusOne([0]), [1]);
  assertEquals(plusOne([9]), [1, 0]);
});
