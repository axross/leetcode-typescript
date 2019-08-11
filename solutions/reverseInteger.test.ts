import reverse from "./reverseInteger";

describe("7. Reverse Integer", () => {
  test("#1", () => {
    expect(reverse(123)).toBe(321);
  });

  test("#2", () => {
    expect(reverse(-123)).toBe(-321);
  });

  test("#3", () => {
    expect(reverse(-12)).toBe(-21);
  });

  test("#4", () => {
    expect(reverse(120)).toBe(21);
  });

  test("#5", () => {
    expect(reverse(1563847412)).toBe(0);
  });
});
