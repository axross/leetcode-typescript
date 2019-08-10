// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/
function firstUniqChar(s: string): number {
  for (let i = 0; i < s.length; ++i) {
    // if the first and last index of character are the same, it's unique
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }

  return -1;
}

describe("387. First Unique Character in a String", () => {
  test("#1", () => {
    expect(firstUniqChar("leetcode")).toBe(0);
  });

  test("#2", () => {
    expect(firstUniqChar("loveleetcode")).toBe(2);
  });

  test("#3", () => {
    expect(firstUniqChar("leetcodeleetcode")).toBe(-1);
  });

  test("#4", () => {
    expect(firstUniqChar("theleetcode")).toBe(1);
  });

  test("#5", () => {
    expect(firstUniqChar("j")).toBe(0);
  });

  test("#6", () => {
    expect(firstUniqChar("")).toBe(-1);
  });
});
