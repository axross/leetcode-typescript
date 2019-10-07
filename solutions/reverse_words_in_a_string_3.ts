// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/
export default function reverseWords(s: string): string {
  const chars = s.split("");

  for (let i = 0, wordStart = 0; i <= chars.length; ++i) {
    if (s[i] !== " " && i < chars.length) continue;

    for (let j = 0; j + wordStart < (wordStart + i) / 2; ++j) {
      [chars[j + wordStart], chars[i - j - 1]] = [
        chars[i - j - 1],
        chars[j + wordStart]
      ];
    }

    wordStart = i + 1;
  }

  return chars.join("");
}
