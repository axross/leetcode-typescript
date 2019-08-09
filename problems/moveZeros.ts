// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/
function moveZeroes(nums: number[]): void {
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

describe("283. Move Zeroes", () => {
  test("#1", () => {
    const array = [0, 1, 0, 3, 12];

    moveZeroes(array);

    expect(array).toEqual([1, 3, 12, 0, 0]);
  });
});
