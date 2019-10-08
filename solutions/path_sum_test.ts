import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../test_utilities/binary_tree.ts";
import pathSum from "./path_sum.ts";

test("112. Path Sum", () => {
  assertStrictEq(
    pathSum(
      createBinaryTreeNode([
        5,
        4,
        8,
        11,
        null,
        13,
        4,
        7,
        2,
        null,
        null,
        null,
        1
      ]),
      22
    ),
    true
  );
  assertStrictEq(
    pathSum(
      createBinaryTreeNode([
        5,
        4,
        8,
        11,
        null,
        13,
        4,
        7,
        2,
        null,
        null,
        null,
        1
      ]),
      20
    ),
    false
  );
  assertStrictEq(pathSum(createBinaryTreeNode([]), 0), false);
});
