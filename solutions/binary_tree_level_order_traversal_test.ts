import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import levelorder from "./binary_tree_level_order_traversal.ts";

test("102. Binary Tree Level Order Traversal", () => {
  assertEquals(levelorder(createBinaryTreeNode([1, null, 2, 3])), [
    [1],
    [2],
    [3]
  ]);
  assertEquals(levelorder(createBinaryTreeNode([4, 4, 5, 1, 2])), [
    [4],
    [4, 5],
    [1, 2]
  ]);
  assertEquals(
    levelorder(
      createBinaryTreeNode([1, null, 1, null, 1, null, 1, null, 1, null, 1, 2])
    ),
    [[1], [1], [1], [1], [1], [1], [2]]
  );
  assertEquals(levelorder(createBinaryTreeNode([1])), [[1]]);
  assertEquals(levelorder(createBinaryTreeNode([])), []);
});
