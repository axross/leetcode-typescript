import search from "./searchInRotatedSortedArray";

describe("33. Search in Rotated Sorted Array", () => {
  test("#1", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  test("#2", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  test("#3", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0);
  });

  test("#4", () => {
    expect(search([3, 1], 3)).toBe(0);
  });

  test("#5", () => {
    expect(search([7, 8, 1, 2, 3, 4, 5, 6], 2)).toBe(3);
  });
});
