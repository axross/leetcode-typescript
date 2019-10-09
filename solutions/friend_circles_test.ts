import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import findCircleNum from "./friend_circles.ts";

test("547. Friend Circles", () => {
  assertStrictEq(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]), 2);
  assertStrictEq(findCircleNum([[1, 1, 0], [1, 1, 1], [0, 1, 1]]), 1);
  assertStrictEq(
    findCircleNum([
      [1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1],
      [1, 0, 1, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 1, 0, 1, 1]
    ]),
    2
  );
  assertStrictEq(
    findCircleNum([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]),
    1
  );
});
