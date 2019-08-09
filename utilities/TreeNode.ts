export interface TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

export function createTreeNode<T>(array: T[], selfIndex = 0): TreeNode<T> {
  if (array.length === 0) {
    throw TypeError("cannot accept a no-element array");
  }

  return {
    val: array[selfIndex],
    left:
      array[selfIndex * 2 + 1] != null
        ? createTreeNode(array, selfIndex * 2 + 1)
        : null,
    right:
      array[selfIndex * 2 + 2] != null
        ? createTreeNode(array, selfIndex * 2 + 2)
        : null
  };
}

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
