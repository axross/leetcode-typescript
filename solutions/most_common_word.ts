// 819. Most Common Word
// https://leetcode.com/problems/most-common-word/
export default function mostCommonWord(
  paragraph: string,
  banned: string[]
): string {
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
