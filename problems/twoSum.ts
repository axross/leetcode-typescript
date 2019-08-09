// 1. Two Sum
// https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): [number, number] {
  // Map<number, index>
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; ++i) {
    // find the index of number that target - currentNumber
    const differenceNumberIndex = map.get(target - nums[i]);

    if (differenceNumberIndex !== undefined) {
      // if it found, it's the answer
      return [differenceNumberIndex, i];
    }

    // otherwise, put the number
    map.set(nums[i], i);
  }

  throw new Error("there's no answer.");
}

describe("1. Two Sum", () => {
  test("#1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("#2", () => {
    expect(twoSum([2, 7, 11, 15], 18)).toEqual([1, 2]);
  });
});
