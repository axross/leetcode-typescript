// 78. Subsets
// https://leetcode.com/problems/subsets/
function subsets(nums: number[]): number[][] {
  const result = [];

  for (let i = 0; i < Math.pow(2, nums.length); ++i) {
    result.push(
      i
        .toString(2) // make it into binary string
        .padStart(nums.length, "0")
        .split("")
        .reduce(
          (arr, v, i) => (v === "1" ? [...arr, nums[i]] : arr),
          [] as number[]
        )
    );
  }

  return result;
}

describe("78. Subsets", () => {
  test("#1", () => {
    const result = subsets([1, 2, 3]);
    const expected = [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []];

    expect([...result].sort()).toEqual([...expected].sort());
  });
});
