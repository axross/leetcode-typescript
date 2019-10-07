import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../test_utilities/binary_tree.ts";
import isValidBST from "./validate_binary_search_tree.ts";

test("98. Validate Binary Search Tree", () => {
  assert(isValidBST(createBinaryTreeNode([2, 1, 3])) === true);
  assert(
    isValidBST(createBinaryTreeNode([5, 1, 4, null, null, 3, 6])) === false
  );
  assert(isValidBST(createBinaryTreeNode([1, 1])) === false);
  assert(isValidBST(createBinaryTreeNode([])) === true);
});
