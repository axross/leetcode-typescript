import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import minCost from "./paint_house.ts";

test("256. Paint House", () => {
  assert(minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]]) === 10);
  assert(
    minCost([
      [17, 2, 17],
      [16, 16, 5],
      [30, 3, 19],
      [4, 8, 2],
      [10, 15, 11]
    ]) === 22
  );
  assert(
    minCost([
      [5, 8, 6],
      [19, 14, 13],
      [7, 5, 12],
      [14, 15, 17],
      [3, 20, 10]
    ]) === 43
  );
  assert(
    minCost([
      [5, 8, 6],
      [19, 14, 13],
      [7, 5, 12],
      [14, 15, 20],
      [3, 20, 10]
    ]) === 43
  );
});
