import getHint from "./bullsAndCows";

describe("299. Bulls and Cows", () => {
  test("#1", () => {
    expect(getHint("1807", "7810")).toBe("1A3B");
  });

  test("#2", () => {
    expect(getHint("1123", "0111")).toBe("1A1B");
  });

  test("#3", () => {
    expect(getHint("1234", "5678")).toBe("0A0B");
  });

  test("#4", () => {
    expect(getHint("1234", "1234")).toBe("4A0B");
  });

  test("#5", () => {
    expect(getHint("1234", "4123")).toBe("0A4B");
  });

  test("#6", () => {
    expect(getHint("1122", "0001")).toBe("0A1B");
  });

  test("#7", () => {
    expect(getHint("11", "10")).toBe("1A0B");
  });
});
