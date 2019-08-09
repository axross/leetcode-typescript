// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
function maxSubArray(nums: number[]): number {
  let current = nums[0];
  let max = current;

  for (let i = 1; i < nums.length; ++i) {
    current = Math.max(nums[i], current + nums[i]);

    if (current > max) {
      max = current;
    }
  }

  return max;
}

// fn max_sub_array(nums: Vec<i32>) -> i32 {
//     let mut current = nums[0];
//     let mut max = nums[0];

//     for i in 1..nums.len() {
//         current = i32::max(nums[i], current + nums[i]);
//         if current > max {
//             max = current;
//         }
//     }

//     max
// }

describe("53. Maximum Subarray", () => {
  test("#1", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test("#2", () => {
    expect(maxSubArray([-3, -2, -5, -1, -4, -1])).toBe(-1);
  });
});
