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
