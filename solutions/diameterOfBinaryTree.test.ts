import { createBinaryTreeNode } from "../utilities/TreeNode";
import diameterOfBinaryTree from "./diameterOfBinaryTree";

describe("543. Diameter of Binary Tree", () => {
  const TEST_CASES = new Map([
    [[1, 2, 3, 4, 5], 3],
    [[1], 0],
    [[], 0],
    [
      [
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
      ],
      8
    ]
  ]);

  for (const [values, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${values}]`, () => {
      expect(diameterOfBinaryTree(createBinaryTreeNode(values))).toBe(expected);
    });
  }
});
