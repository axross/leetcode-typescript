import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import findJudge from "./find_the_town_judge.ts";

test("997. Find the Town Judge", () => {
  assertStrictEq(findJudge(2, [[1, 2]]), 2);
  assertStrictEq(findJudge(3, [[1, 3], [2, 3]]), 3);
  assertStrictEq(findJudge(3, [[1, 3], [2, 3], [3, 1]]), -1);
  assertStrictEq(findJudge(3, [[1, 2], [2, 3]]), -1);
  assertStrictEq(findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]), 3);
  assertStrictEq(findJudge(1, []), 1);
});
