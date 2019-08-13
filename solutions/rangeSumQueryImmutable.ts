// 303. Range Sum Query - Immutable
// https://leetcode.com/problems/range-sum-query-immutable/
class NumArray {
  constructor(nums: number[]) {
    let total = 0;

    // [1, 2, 3, 4] -> [1, 3, 6, 10]
    for (let i = 0; i < nums.length; ++i) {
      total += nums[i];

      this.sums.push(total);
    }
  }

  private sums: number[] = [];

  // sumRange(2, 5) == sumRange(0, 5) - sumRange(0, 1)
  sumRange(i: number, j: number): number {
    return this.sums[j] - (this.sums[i - 1] || 0);
  }
}

export default NumArray;
