import { createBinaryTreeNode } from "./TreeNode";

describe("createBinaryTreeNode", () => {
  it("creates TreeNode by an array #1", () => {
    expect(createBinaryTreeNode([1, 2, 3])).toEqual({
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    });
  });

  it("creates TreeNode by an array #2", () => {
    expect(createBinaryTreeNode([1, null, 2, 3])).toEqual({
      val: 1,
      left: null,
      right: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null
        },
        right: null
      }
    });
  });

  it("creates TreeNode by an array #3", () => {
    expect(
      createBinaryTreeNode([5, 4, 7, 3, null, 2, null, -1, null, 9])
    ).toEqual({
      val: 5,
      left: {
        val: 4,
        left: {
          val: 3,
          left: {
            val: -1,
            left: null,
            right: null
          },
          right: null
        },
        right: null
      },
      right: {
        val: 7,
        left: {
          val: 2,
          left: {
            val: 9,
            left: null,
            right: null
          },
          right: null
        },
        right: null
      }
    });
  });

  it("returns null by an empty array", () => {
    expect(createBinaryTreeNode([])).toEqual(null);
  });
});
