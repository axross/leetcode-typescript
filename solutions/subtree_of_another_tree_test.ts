import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import isSubtree from "./subtree_of_another_tree.ts";

test("572. Subtree of Another Tree", () => {
  assertStrictEq(
    isSubtree(
      createBinaryTreeNode([4, 4, 5, 1, 2]),
      createBinaryTreeNode([4, 1, 2])
    ),
    true
  );
  assertStrictEq(
    isSubtree(
      createBinaryTreeNode([4, 4, 5, 1, 2, null, null, null, null, 0]),
      createBinaryTreeNode([4, 1, 2])
    ),
    false
  );
  assertStrictEq(
    isSubtree(
      createBinaryTreeNode([
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        null,
        1,
        2
      ]),
      createBinaryTreeNode([1, null, 1, null, 1, null, 1, null, 1, null, 1, 2])
    ),
    true
  );
});
