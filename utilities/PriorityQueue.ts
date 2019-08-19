export function push<T>(
  array: T[],
  value: T,
  comparator: OrderComparator<T> = compare
): T[] {
  array.push(value);

  if (array.length >= 2) {
    let target = array.length - 1;

    while (true) {
      const parent = Math.floor((target - 1) / 2);

      if (array[parent] === undefined) break;
      if (comparator(array[target], array[parent]) <= 0) break;

      [array[target], array[parent]] = [array[parent], array[target]];

      target = parent;
    }
  }

  return array;
}

export function pop<T>(
  array: T[],
  comparator: OrderComparator<T> = compare
): T | undefined {
  if (array.length <= 1) return array.pop();

  const rootValue = array[0];
  array[0] = array.pop()!;

  let target = 0;

  while (true) {
    const left = target * 2 + 1;
    const right = target * 2 + 2;
    let largest = target;

    if (
      array[left] !== undefined &&
      comparator(array[left], array[largest]) > 0
    ) {
      largest = left;
    }

    if (
      array[right] !== undefined &&
      comparator(array[right], array[largest]) > 0
    ) {
      largest = right;
    }

    if (largest === target) break;

    [array[largest], array[target]] = [array[target], array[largest]];

    target = largest;
  }

  return rootValue;
}

type OrderComparator<T> = (a: T, b: T) => number;

export function compare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;

  return 0;
}
