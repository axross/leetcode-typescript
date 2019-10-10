import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import rangeSumBST from "./range_sum_of_bst.ts";

test("938. Range Sum of BST", () => {
  assertStrictEq(
    rangeSumBST(createBinaryTreeNode([10, 5, 15, 3, 7, null, 18]), 7, 15),
    32
  );
  assertStrictEq(
    rangeSumBST(
      createBinaryTreeNode([10, 5, 15, 3, 7, 13, 18, 1, null, 6]),
      6,
      10
    ),
    23
  );
  assertStrictEq(
    rangeSumBST(
      createBinaryTreeNode([10, 5, 15, 3, 7, 13, 18, 1, null, 6]),
      4,
      12
    ),
    28
  );
  assertStrictEq(rangeSumBST(createBinaryTreeNode([1]), 1, 1), 1);
  assertStrictEq(rangeSumBST(createBinaryTreeNode([]), 1, 1), 0);
});
