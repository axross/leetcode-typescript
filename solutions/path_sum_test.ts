import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../test_utilities/binary_tree.ts";
import pathSum from "./path_sum.ts";

test("112. Path Sum", () => {
  assert(
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
    ) === true
  );
  assert(
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
    ) === false
  );
  assert(pathSum(createBinaryTreeNode([]), 0) === false);
});
