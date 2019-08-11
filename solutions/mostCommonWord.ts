// 819. Most Common Word
// https://leetcode.com/problems/most-common-word/
function mostCommonWord(paragraph: string, banned: string[]): string {
  const lowercase = paragraph.toLowerCase();
  // split lowercase paragpraph into words (by non a-z characters)
  const words = lowercase.split(/[^a-z]+/);
  const wordsCount = new Map<string, number>();
  let mostFrequentWord = "";
  let mostFrequentWordCount = -1;

  for (const word of words) {
    // words possibly includes empty string at the end
    if (!banned.includes(word) && word !== "") {
      const count = (wordsCount.get(word) || 0) + 1;

      wordsCount.set(word, count);

      if (count > mostFrequentWordCount) {
        mostFrequentWordCount = count;
        mostFrequentWord = word;
      }
    }
  }

  return mostFrequentWord;
}

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
