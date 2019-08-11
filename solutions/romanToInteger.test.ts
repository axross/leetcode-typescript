import romanToInt from "./romanToInteger";

describe("13. Roman to Integer", () => {
  test("#1", () => {
    expect(romanToInt("VI")).toBe(6);
  });

  test("#2", () => {
    expect(romanToInt("IV")).toBe(4);
  });

  test("#3", () => {
    expect(romanToInt("III")).toBe(3);
  });

  test("#4", () => {
    expect(romanToInt("IIII")).toBe(4);
  });

  test("#5", () => {
    expect(romanToInt("XIII")).toBe(13);
  });

  test("#6", () => {
    expect(romanToInt("MDCLXVI")).toBe(1666);
  });

  test("#7", () => {
    expect(romanToInt("MCDCXLXIV")).toBe(1554);
  });

  test("#8", () => {
    expect(romanToInt("CMCDXCXLIXIV")).toBe(1443);
  });
});
