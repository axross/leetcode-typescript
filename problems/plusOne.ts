// 66. Plus One
// https://leetcode.com/problems/plus-one/
function plusOne(digits: number[]): number[] {
  if (digits.length === 1) {
    return digits[0] <= 8 ? [digits[0] + 1] : [1, 0];
  }

  const lastDigits = plusOne(digits.slice(-1));

  if (lastDigits.length === 2) {
    return [...plusOne(digits.slice(0, -1)), lastDigits[1]];
  } else {
    return [...digits.slice(0, -1), lastDigits[0]];
  }
}

describe("66. Plus One", () => {
  test("#1", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  test("#2", () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
  });

  test("#3", () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });

  test("#4", () => {
    expect(
      plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
    ).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
  });

  test("#5", () => {
    expect(plusOne([0])).toEqual([1]);
  });

  test("#6", () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });
});
