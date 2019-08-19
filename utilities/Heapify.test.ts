import { heapPop, heapPush } from "./Heapify";

describe("heapPush()", () => {
  test("returns an array that its head value is most prior", () => {
    expect(heapPush([3, 2, 1], 5)[0]).toBe(5);
    expect(heapPush([3, 2, 1], 0)[0]).toBe(3);
  });

  test("returns an array that its head value is most prior even when an one-element array", () => {
    expect(heapPush([1], 2)[0]).toBe(2);
    expect(heapPush([1], 0)[0]).toBe(1);
  });

  test("returns an array that its head value is most prior even when an empty array given", () => {
    expect(heapPush([], 5)[0]).toBe(5);
  });

  test("mutate the given array", () => {
    const array = [3, 1, 2];

    heapPush(array, 5);

    expect(array).toEqual([5, 3, 2, 1]);
  });
});

describe("pop()", () => {
  test("returns the most prior value", () => {
    expect(heapPop([5, 4, 3, 2, 1])).toBe(5);
  });

  test("returns the most prior value even when an one-element array", () => {
    expect(heapPop([1])).toBe(1);
  });

  test("returns undefined even when an empty array given", () => {
    expect(heapPop([])).toBe(undefined);
  });

  test("mutate the given array and keeps its head value most prior", () => {
    const array = [5, 3, 4, 2, 1];

    heapPop(array);

    expect(array).toEqual([4, 3, 1, 2]);
  });
});
