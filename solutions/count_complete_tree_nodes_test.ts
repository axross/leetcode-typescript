import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../test_utilities/binary_tree.ts";
import countNodes from "./count_complete_tree_nodes.ts";

test("222. Count Complete Tree Nodes", () => {
  assertStrictEq(countNodes(createBinaryTreeNode([1, 2, 3, 4, 5, 6])), 6);
  assertStrictEq(countNodes(createBinaryTreeNode([])), 0);
  assertStrictEq(countNodes(createBinaryTreeNode([1, 2, 3, 4, 5, 6, 7, 8])), 8);
  assertStrictEq(countNodes(createBinaryTreeNode([1, 2, 3, 4, 5, 6, 7])), 7);
});
