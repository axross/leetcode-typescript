export interface BinaryTreeNode<T> {
  val: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
}

export function createBinaryTreeNode<T>(
  array: (T | null)[]
): BinaryTreeNode<T> | null {
  if (array.length === 0) return null;

  let skipped = 0;
  const root = { val: array[0]!, left: null, right: null };
  const queue: [number, BinaryTreeNode<T>, BinaryTreeSide][] = [
    [1, root, BinaryTreeSide.left],
    [2, root, BinaryTreeSide.right]
  ];

  while (queue.length >= 1) {
    const [index, parent, side] = queue.shift()!;

    if (index >= array.length) break;

    if (array[index] === null) {
      skipped += 1;

      continue;
    }

    const node = { val: array[index]!, left: null, right: null };

    if (side === BinaryTreeSide.left) {
      parent.left = node;
    } else {
      parent.right = node;
    }

    queue.push(
      [(index - skipped) * 2 + 1, node, BinaryTreeSide.left],
      [(index - skipped) * 2 + 2, node, BinaryTreeSide.right]
    );
  }

  return root;
}

enum BinaryTreeSide {
  left,
  right
}
