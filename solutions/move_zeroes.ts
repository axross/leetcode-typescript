// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/
export default function moveZeroes(nums: number[]): void {
  let deleted = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === 0) {
      // delete the element (always 0)
      nums.splice(i, 1);

      // increment deleted item count
      deleted += 1;

      continue;
    }

    // only when nothing deleted, increment cursor
    i += 1;
  }

  // push 0 to the end as many as deleted
  for (let i = 0; i < deleted; ++i) {
    nums.push(0);
  }
}
