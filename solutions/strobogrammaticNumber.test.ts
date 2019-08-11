import isStrobogrammatic from "./strobogrammaticNumber";

describe("246. Strobogrammatic Number", () => {
  test("#1", () => {
    expect(isStrobogrammatic("69")).toBe(true);
  });

  test("#2", () => {
    expect(isStrobogrammatic("818")).toBe(true);
  });

  test("#3", () => {
    expect(isStrobogrammatic("962")).toBe(false);
  });

  test("#4", () => {
    expect(isStrobogrammatic("1818")).toBe(false);
  });

  test("#5", () => {
    expect(isStrobogrammatic("0")).toBe(true);
  });

  test("#6", () => {
    expect(isStrobogrammatic("6")).toBe(false);
  });

  test("#7", () => {
    expect(isStrobogrammatic("")).toBe(true);
  });
});
