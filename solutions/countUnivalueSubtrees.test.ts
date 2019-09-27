import { createBinaryTreeNode } from "../utilities/TreeNode";
import countUnivalSubtrees from "./countUnivalueSubtrees";

describe("250. Count Univalue Subtrees", () => {
  const TEST_CASES = new Map([
    [[5, 1, 5, 5, 5, null, 5], 4],
    [[1, 4, 3, 4, 4, 5, 6], 5],
    [[], 0]
  ]);

  for (const [values, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${values}]`, () => {
      expect(countUnivalSubtrees(createBinaryTreeNode(values))).toBe(expected);
    });
  }
});
