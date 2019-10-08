import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../test_utilities/binary_tree.ts";
import isValidBST from "./validate_binary_search_tree.ts";

test("98. Validate Binary Search Tree", () => {
  assertStrictEq(isValidBST(createBinaryTreeNode([2, 1, 3])), true);
  assertStrictEq(
    isValidBST(createBinaryTreeNode([5, 1, 4, null, null, 3, 6])),
    false
  );
  assertStrictEq(isValidBST(createBinaryTreeNode([1, 1])), false);
  assertStrictEq(isValidBST(createBinaryTreeNode([])), true);
});
