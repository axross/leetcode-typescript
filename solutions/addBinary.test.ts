import addBinary from "./addBinary";

describe("67. Add Binary", () => {
  test("#1", () => {
    expect(addBinary("11", "1")).toBe("100");
  });

  test("#2", () => {
    expect(addBinary("1010", "1011")).toBe("10101");
  });
});
