// 344. Reverse String
// https://leetcode.com/problems/reverse-string/
function reverseString(chars: string[]): void {
  // i: 0, 1, 2..., r: 4, 3, 2...
  // r >= i is the middle of chars
  for (let i = 0, r = chars.length - 1; i < r; ++i, --r) {
    // swap in one line
    [chars[i], chars[r]] = [chars[r], chars[i]];
  }
}

describe("344. Reverse String", () => {
  test("#1", () => {
    const characters = ["h", "e", "l", "l", "o"];

    reverseString(characters);

    expect(characters).toEqual(["o", "l", "l", "e", "h"]);
  });

  test("#2", () => {
    const characters = ["H", "a", "n", "n", "a", "h"];

    reverseString(characters);

    expect(characters).toEqual(["h", "a", "n", "n", "a", "H"]);
  });
});
