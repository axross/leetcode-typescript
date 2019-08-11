import intersection from "./intersectionOfTwoArrays";

describe("349. Intersection of Two Arrays", () => {
  test("#1", () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
  });

  test("#2", () => {
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
  });
});
