import { createBinaryTreeNode } from "../utilities/TreeNode";
import isSubtree from "./subtreeOfAnotherTree";

describe("572. Subtree of Another Tree", () => {
  const TEST_CASES = new Map<[(number | null)[], (number | null)[]], boolean>([
    [[[4, 4, 5, 1, 2], [4, 1, 2]], true],
    [[[4, 4, 5, 1, 2, null, null, null, null, 0], [4, 1, 2]], false],
    [
      [
        [
          1,
          null,
          1,
          null,
          1,
          null,
          1,
          null,
          1,
          null,
          1,
          null,
          1,
          null,
          1,
          null,
          1,
          null,
          1,
          null,
          1,
          2
        ],
        [1, null, 1, null, 1, null, 1, null, 1, null, 1, 2]
      ],
      true
    ]
  ]);

  for (const [[s, t], expected] of TEST_CASES) {
    it(`returns ${expected} when [${s}] and [${t}]`, () => {
      expect(
        isSubtree(createBinaryTreeNode(s)!, createBinaryTreeNode(t)!)
      ).toBe(expected);
    });
  }
});
