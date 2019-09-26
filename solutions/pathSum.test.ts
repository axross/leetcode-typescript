import { createBinaryTreeNode } from "../utilities/TreeNode";
import pathSum from "./pathSum";

describe("112. Path Sum", () => {
  const TEST_CASES = new Map<[(number | null)[], number], boolean>([
    [[[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22], true],
    [[[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 20], false],
    [[[], 0], false]
  ]);

  for (const [[values, sum], expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${values}] and ${sum}`, () => {
      expect(pathSum(createBinaryTreeNode(values), sum)).toBe(expected);
    });
  }
});
