export interface ListNode<T> {
  val: T;
  next: ListNode<T> | null;
}

export function createListNode<T>(array: T[]): ListNode<T> {
  if (array.length === 0) {
    throw TypeError("cannot accept a no-element array");
  }

  const head: ListNode<T> = { val: array[0], next: null };
  let tail = head;

  for (let i = 1; i < array.length; ++i) {
    const node = { val: array[i], next: null };

    tail.next = node;
    tail = node;
  }

  return head;
}
