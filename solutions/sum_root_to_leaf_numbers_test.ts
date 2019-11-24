import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import { createBinaryTreeNode } from "../data_structures/binary_tree.ts";
import sumNumbers from "./sum_root_to_leaf_numbers.ts";

test("129. Sum Root to Leaf Numbers", () => {
  assertStrictEq(sumNumbers(createBinaryTreeNode([1, 2, 3])), 25);
  assertStrictEq(sumNumbers(createBinaryTreeNode([4, 9, 0, 5, 1])), 1026);
  assertStrictEq(sumNumbers(createBinaryTreeNode([0, 1])), 1);
  assertStrictEq(sumNumbers(createBinaryTreeNode([])), 0);
});
