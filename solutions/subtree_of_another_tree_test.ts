import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../test_utilities/binary_tree.ts";
import isSubtree from "./subtree_of_another_tree.ts";

test("572. Subtree of Another Tree", () => {
  assert(
    isSubtree(
      createBinaryTreeNode([4, 4, 5, 1, 2]),
      createBinaryTreeNode([4, 1, 2])
    ) === true
  );
  assert(
    isSubtree(
      createBinaryTreeNode([4, 4, 5, 1, 2, null, null, null, null, 0]),
      createBinaryTreeNode([4, 1, 2])
    ) === false
  );
  assert(
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
    ) === true
  );
});
