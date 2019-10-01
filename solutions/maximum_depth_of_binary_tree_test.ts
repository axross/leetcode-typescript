import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../test_utilities/binary_tree.ts";
import maxDepth from "./maximum_depth_of_binary_tree.ts";

test("104. Maximum Depth of Binary Tree", () => {
  assert(maxDepth(createBinaryTreeNode([3, 9, 20, null, null, 15, 7])) === 3);
  assert(maxDepth(createBinaryTreeNode([])) === 0);
});
