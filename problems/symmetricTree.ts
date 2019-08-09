// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/
function isSymmetric<T>(node: TreeNode<T> | null): boolean {
  // check recursively for each outside-elements
  function isEqual<T>(
    node1: TreeNode<T> | null,
    node2: TreeNode<T> | null
  ): boolean {
    // if both are null
    if (!node1 && !node2) return true;

    // if both are not null
    if (node1 && node2) {
      // check their value and each children recursively
      return (
        node1.val === node2.val &&
        isEqual(node1.left, node2.right) &&
        isEqual(node1.right, node2.left)
      );
    }

    // if either is null
    return false;
  }

  // node is possibly null (the test case exists)
  if (!node) return true;

  return isEqual(node.left, node.right);
}

interface TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

describe("101. Symmetric Tree", () => {
  test("#1", () => {
    expect(
      isSymmetric({
        val: 1,
        left: {
          val: 2,
          left: { val: 3, left: null, right: null },
          right: { val: 4, left: null, right: null }
        },
        right: {
          val: 2,
          left: { val: 4, left: null, right: null },
          right: { val: 3, left: null, right: null }
        }
      })
    ).toBe(true);
  });

  test.only("#2", () => {
    expect(
      isSymmetric({
        val: 1,
        left: {
          val: 2,
          left: { val: 3, left: null, right: null },
          right: null
        },
        right: {
          val: 2,
          left: { val: 3, left: null, right: null },
          right: null
        }
      })
    ).toBe(false);
  });

  test("#3", () => {
    expect(
      isSymmetric({
        val: 1,
        left: {
          val: 2,
          left: { val: 3, left: null, right: null },
          right: null
        },
        right: {
          val: 2,
          left: null,
          right: { val: 3, left: null, right: null }
        }
      })
    ).toBe(true);
  });

  test("#4", () => {
    expect(isSymmetric(null)).toBe(true);
  });
});
