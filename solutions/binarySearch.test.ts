import search from "./binarySearch";

describe("704. Binary Search", () => {
  test("#1", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test("#2", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 13)).toBe(-1);
  });
});
