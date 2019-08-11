import firstUniqChar from "./firstUniqueCharacterInAString";

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
