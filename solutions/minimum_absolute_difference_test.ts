import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import minimumAbsDifference from './minimum_absolute_difference.ts';

test("1200. Minimum Absolute Difference", () => {
  assertEquals(minimumAbsDifference([4,2,1,3]), [[1,2], [2,3], [3,4]]);
  assertEquals(minimumAbsDifference([1,3,6,10,15]), [[1,3]]);
  assertEquals(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]), [[-14,-10],[19,23],[23,27]]);
  assertEquals(minimumAbsDifference([40,11,26,27,-20]), [[26,27]]);
});
