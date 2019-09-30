import { createBinaryTreeNode } from "../testUtilities/BinaryTree";
import isSymmetric from "./symmetricTree";

describe("101. Symmetric Tree", () => {
  const TEST_CASES = new Map([
    [[1, 2, 2, 3, 4, 4, 3], true],
    [[1, 2, 2, 3, null, 3, null], false],
    [[1, 2, 2, 3, null, null, 3], true],
    [[], true]
  ]);

  for (const [values, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${values}]`, () => {
      expect(isSymmetric(createBinaryTreeNode(values))).toBe(expected);
    });
  }
});
