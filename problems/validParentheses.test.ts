import isValid from "./validParentheses";

describe("20. Valid Parentheses", () => {
  test("#1", () => {
    expect(isValid("()")).toBe(true);
  });

  test("#2", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test("#3", () => {
    expect(isValid("(]")).toBe(false);
  });

  test("#4", () => {
    expect(isValid("([)]")).toBe(false);
  });

  test("#5", () => {
    expect(isValid("{[]}")).toBe(true);
  });

  test("#6", () => {
    expect(isValid("[")).toBe(false);
  });

  test("#7", () => {
    expect(isValid("[{")).toBe(false);
  });
});
