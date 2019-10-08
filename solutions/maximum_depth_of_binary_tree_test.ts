import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import maxDepth from "./maximum_depth_of_binary_tree.ts";

test("104. Maximum Depth of Binary Tree", () => {
  assertStrictEq(
    maxDepth(createBinaryTreeNode([3, 9, 20, null, null, 15, 7])),
    3
  );
  assertStrictEq(maxDepth(createBinaryTreeNode([])), 0);
});
