import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../test_utilities/binary_tree.ts";
import countUnivalSubtrees from "./count_univalue_subtrees.ts";

test("250. Count Univalue Subtrees", () => {
  assert(
    countUnivalSubtrees(createBinaryTreeNode([5, 1, 5, 5, 5, null, 5])) === 4
  );
  assert(
    countUnivalSubtrees(createBinaryTreeNode([1, 4, 3, 4, 4, 5, 6])) === 5
  );
  assert(countUnivalSubtrees(createBinaryTreeNode([])) === 0);
});
