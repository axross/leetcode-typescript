import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import postorderTraversal from "./binary_tree_postorder_traversal.ts";

test("145. Binary Tree Postorder Traversal", () => {
  assertEquals(postorderTraversal(createBinaryTreeNode([1, null, 2, 3])), [
    3,
    2,
    1
  ]);
  assertEquals(postorderTraversal(createBinaryTreeNode([4, 4, 5, 1, 2])), [
    1,
    2,
    4,
    5,
    4
  ]);
  assertEquals(
    postorderTraversal(
      createBinaryTreeNode([1, null, 1, null, 1, null, 1, null, 1, null, 1, 2])
    ),
    [2, 1, 1, 1, 1, 1, 1]
  );
  assertEquals(postorderTraversal(createBinaryTreeNode([1])), [1]);
  assertEquals(postorderTraversal(createBinaryTreeNode([])), []);
});
