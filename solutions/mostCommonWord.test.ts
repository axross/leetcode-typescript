import mostCommonWord from "./mostCommonWord";

describe("819. Most Common Word", () => {
  test("#1", () => {
    expect(
      mostCommonWord(
        "Bob hit a ball, the hit BALL flew far after it was hit.",
        ["hit"]
      )
    ).toBe("ball");
  });

  test("#2", () => {
    expect(
      mostCommonWord(
        "Bob hit a ball, the hit BALL flew far after it was hit.",
        []
      )
    ).toBe("hit");
  });

  test("#3", () => {
    expect(mostCommonWord("Bob", [])).toBe("bob");
  });

  test("#4", () => {
    expect(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"])).toBe("b");
  });
});
