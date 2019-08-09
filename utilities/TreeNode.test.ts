import { createTreeNode } from "./TreeNode";

describe("createTreeNode", () => {
  test("creates TreeNode by an array #1", () => {
    expect(createTreeNode([1, 2, 2, 3, 4, 4, 3])).toEqual({
      val: 1,
      left: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null
        },
        right: {
          val: 4,
          left: null,
          right: null
        }
      },
      right: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null
        },
        right: {
          val: 3,
          left: null,
          right: null
        }
      }
    });
  });

  test("creates TreeNode by an array #2", () => {
    expect(createTreeNode([1, 2, 2, 3, null, null, 3])).toEqual({
      val: 1,
      left: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null
        },
        right: null
      },
      right: {
        val: 2,
        left: null,
        right: {
          val: 3,
          left: null,
          right: null
        }
      }
    });
  });

  test("throws if the given array has no element", () => {
    expect(() => createTreeNode([])).toThrow(TypeError);
  });
});
