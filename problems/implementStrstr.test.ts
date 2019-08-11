import strStr from "./implementStrstr";

describe("28. Implement strStr()", () => {
  test("#1", () => {
    expect(strStr("hello", "ll")).toBe(2);
  });

  test("#2", () => {
    expect(strStr("aaaaa", "bba")).toBe(-1);
  });

  test("#3", () => {
    expect(strStr("llooll", "ll")).toBe(0);
  });

  test("#4", () => {
    expect(strStr("llooll", "ool")).toBe(2);
  });

  test("#5", () => {
    expect(strStr("hello", "")).toBe(0);
  });

  test("#6", () => {
    expect(strStr("", "a")).toBe(-1);
  });

  test("#7", () => {
    expect(strStr("", "")).toBe(0);
  });

  test("#8", () => {
    expect(strStr("aaa", "aaaa")).toBe(-1);
  });

  test("#9", () => {
    expect(strStr("hello", "lo")).toBe(3);
  });
});
