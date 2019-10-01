import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import findJudge from "./find_the_town_judge.ts";

test("997. Find the Town Judge", () => {
  assert(findJudge(2, [[1, 2]]) === 2);
  assert(findJudge(3, [[1, 3], [2, 3]]) === 3);
  assert(findJudge(3, [[1, 3], [2, 3], [3, 1]]) === -1);
  assert(findJudge(3, [[1, 2], [2, 3]]) === -1);
  assert(findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]) === 3);
  assert(findJudge(1, []) === 1);
});
