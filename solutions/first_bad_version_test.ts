import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import solution from "./first_bad_version.ts";

test("278. First Bad Version", () => {
  const findFirstBadVersion = solution(version => version >= 4);

  assert(findFirstBadVersion(5) === 4);
  assert(findFirstBadVersion(10) === 4);
});
