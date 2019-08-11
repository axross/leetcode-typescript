import longestCommonPrefix from "./longestCommonPrefix";

describe("14. Longest Common Prefix", () => {
  test("#1", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  test("#2", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  test("#3", () => {
    expect(longestCommonPrefix(["aca", "cba"])).toBe("");
  });

  test("#4", () => {
    expect(longestCommonPrefix([""])).toBe("");
  });

  test("#5", () => {
    expect(longestCommonPrefix(["a"])).toBe("a");
  });

  test("#6", () => {
    expect(longestCommonPrefix(["a", "b"])).toBe("");
  });
});
