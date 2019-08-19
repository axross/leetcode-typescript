import { pop, push } from "./PriorityQueue";

describe("push()", () => {
  test("returns an array that its head value is most prior", () => {
    expect(push([3, 2, 1], 5)[0]).toBe(5);
    expect(push([3, 2, 1], 0)[0]).toBe(3);
  });

  test("returns an array that its head value is most prior even when an one-element array", () => {
    expect(push([1], 2)[0]).toBe(2);
    expect(push([1], 0)[0]).toBe(1);
  });

  test("returns an array that its head value is most prior even when an empty array given", () => {
    expect(push([], 5)[0]).toBe(5);
  });

  test("mutate the given array", () => {
    const array = [5, 3, 1, 2];

    pop(array);

    expect(array).toEqual([3, 2, 1]);
  });
});

describe("pop()", () => {
  test("returns the most prior value", () => {
    expect(pop([5, 4, 3, 2, 1])).toBe(5);
  });

  test("returns the most prior value even when an one-element array", () => {
    expect(pop([1])).toBe(1);
  });

  test("returns undefined even when an empty array given", () => {
    expect(pop([])).toBe(undefined);
  });

  test("mutate the given array and keeps its head value most prior", () => {
    const array = [5, 3, 4, 2, 1];

    pop(array);

    expect(array).toEqual([4, 3, 1, 2]);
  });
});
