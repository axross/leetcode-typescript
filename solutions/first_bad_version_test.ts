import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import solution from "./first_bad_version.ts";

test("278. First Bad Version", () => {
  const findFirstBadVersion = solution(version => version >= 4);

  assertStrictEq(findFirstBadVersion(5), 4);
  assertStrictEq(findFirstBadVersion(10), 4);
});
