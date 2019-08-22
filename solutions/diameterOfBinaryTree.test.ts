import { createBinaryTreeNode } from "../utilities/TreeNode";
import diameterOfBinaryTree from "./diameterOfBinaryTree";

describe("543. Diameter of Binary Tree", () => {
  test("#1", () => {
    expect(diameterOfBinaryTree(createBinaryTreeNode([1, 2, 3, 4, 5]))).toBe(3);
  });

  test("#2", () => {
    expect(diameterOfBinaryTree(createBinaryTreeNode([1]))).toBe(0);
  });

  test("#3", () => {
    expect(diameterOfBinaryTree(null)).toBe(0);
  });

  test("#4", () => {
    expect(
      diameterOfBinaryTree(
        createBinaryTreeNode([
          4,
          -7,
          -3,
          null,
          null,
          -9,
          -3,
          9,
          -7,
          -4,
          null,
          6,
          null,
          -6,
          -6,
          null,
          null,
          0,
          6,
          5,
          null,
          9,
          null,
          null,
          -1,
          -4,
          null,
          null,
          null,
          -2
        ])
      )
    ).toBe(8);
  });
});
