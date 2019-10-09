export interface LinkedListNode<T> {
  val: T;
  next: LinkedListNode<T> | null;
}

export function createLinkedListNode<T>(array: T[]): LinkedListNode<T> | null {
  if (array.length === 0) return null;

  const head: LinkedListNode<T> = { val: array[0], next: null };
  let tail = head;

  for (let i = 1; i < array.length; ++i) {
    const node = { val: array[i], next: null };

    tail.next = node;
    tail = node;
  }

  return head;
}

export function getNthNode<T>(
  node: LinkedListNode<T>,
  n: number
): LinkedListNode<T> {
  if (!Number.isSafeInteger(n)) {
    throw new TypeError("the given index is not an integer");
  }

  const isNegative = n < 0;

  const nodes = [node];
  let i = 0;

  while (isNegative || i <= n) {
    const next = nodes[nodes.length - 1].next;

    if (!next) break;

    nodes.push(next);
    i += 1;
  }

  const actualN = isNegative ? nodes.length + n : n;

  if (nodes[actualN] === undefined) {
    throw new Error("the given index is out of bounds");
  }

  return nodes[actualN];
}
