// 10. Regular Expression Matching
// https://leetcode.com/problems/regular-expression-matching/
export default function isMatch(string: string, pattern: string): boolean {
  const unmatched = new Set();

  function traverse(stringIndex: number, patternIndex: number): boolean {
    if (unmatched.has(`${stringIndex}#${patternIndex}`)) return false;

    if (stringIndex === string.length) {
      let isOnlyOptionalLeft = true;

      for (let i = patternIndex; i < pattern.length; i += 2) {
        if (pattern[i + 1] !== "*") {
          isOnlyOptionalLeft = false;
        }
      }

      if (isOnlyOptionalLeft) return true;
    } else if (patternIndex !== pattern.length) {
      const patternElement = pattern[patternIndex];
      const isHeadMatch =
        patternElement === string[stringIndex] || patternElement === ".";

      if (pattern[patternIndex + 1] === "*") {
        if (isHeadMatch && traverse(stringIndex + 1, patternIndex)) return true;
        if (traverse(stringIndex, patternIndex + 2)) return true;
      } else if (isHeadMatch && traverse(stringIndex + 1, patternIndex + 1)) {
        return true;
      }
    }

    unmatched.add(`${stringIndex}#${patternIndex}`);

    return false;
  }

  return traverse(0, 0);
}
