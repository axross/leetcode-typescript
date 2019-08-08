// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
function isValid(s: string): boolean {
  let stack: string[] = [];

  for (let i = 0; i < s.length; ++i) {
    const char = s[i];

    if (OPEN_BRACKET_SET.has(char)) {
      stack.push(char);
    } else if (BRACKET_PAIR_MAP.get(char) === stack[stack.length - 1]) {
      // pop it when char is closing paren corresponding to the top in the stack
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

// preapre pairs of brackets in advance
// FYI: it doesn't so much faster even if you change these into char code (number)
const OPEN_BRACKET_SET = new Set(["(", "[", "{"]);
const BRACKET_PAIR_MAP = new Map([[")", "("], ["]", "["], ["}", "{"]]);

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
