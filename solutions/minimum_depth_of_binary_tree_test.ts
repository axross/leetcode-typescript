import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../test_utilities/binary_tree.ts";
import minDepth from "./minimum_depth_of_binary_tree.ts";

test("111. Minimum Depth of Binary Tree", () => {
  assert(minDepth(createBinaryTreeNode([3, 9, 20, null, null, 15, 7])) === 2);
  assert(minDepth(createBinaryTreeNode([1, 2])) === 2);
  assert(minDepth(createBinaryTreeNode([1, null, 2, null, 2])) === 3);
  assert(minDepth(createBinaryTreeNode([1])) === 1);
  assert(minDepth(createBinaryTreeNode([])) === 0);
});
