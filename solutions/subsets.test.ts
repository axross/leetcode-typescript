import subsets from "./subsets";

describe("78. Subsets", () => {
  test("#1", () => {
    const result = subsets([1, 2, 3]);
    const expected = [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []];

    expect([...result].sort()).toEqual([...expected].sort());
  });
});
