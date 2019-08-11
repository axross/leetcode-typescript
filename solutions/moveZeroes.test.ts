import moveZeroes from "./moveZeroes";

describe("283. Move Zeroes", () => {
  test("#1", () => {
    const array = [0, 1, 0, 3, 12];

    moveZeroes(array);

    expect(array).toEqual([1, 3, 12, 0, 0]);
  });
});
