import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../test_utilities/binary_tree.ts";
import isSymmetric from "./symmetric_tree.ts";

test("101. Symmetric Tree", () => {
  assertStrictEq(
    isSymmetric(createBinaryTreeNode([1, 2, 2, 3, 4, 4, 3])),
    true
  );
  assertStrictEq(
    isSymmetric(createBinaryTreeNode([1, 2, 2, 3, null, 3, null])),
    false
  );
  assertStrictEq(
    isSymmetric(createBinaryTreeNode([1, 2, 2, 3, null, null, 3])),
    true
  );
  assertStrictEq(isSymmetric(createBinaryTreeNode([])), true);
});
