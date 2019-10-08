import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import canPartition from "./partition_equal_subset_sum.ts";

test("416. Partition Equal Subset Sum", () => {
  assertStrictEq(canPartition([1, 5, 11, 5]), true);
  assertStrictEq(canPartition([1, 2, 3, 5]), false);
  assertStrictEq(canPartition([8, 6, 3, 4, 5]), true);
});
