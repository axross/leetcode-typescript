import { createTreeNode } from "../utilities/TreeNode";
import countNodes from "./countCompleteTreeNodes";

describe("222. Count Complete Tree Nodes", () => {
  test("#1", () => {
    expect(countNodes(createTreeNode([1, 2, 3, 4, 5, 6]))).toBe(6);
  });

  test("#2", () => {
    expect(countNodes(null)).toBe(0);
  });

  test("#3", () => {
    expect(countNodes(createTreeNode([1, 2, 3, 4, 5, 6, 7, 8]))).toBe(8);
  });

  test("#4", () => {
    expect(countNodes(createTreeNode([1, 2, 3, 4, 5, 6, 7]))).toBe(7);
  });
});
