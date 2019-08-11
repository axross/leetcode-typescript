// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/
function romanToInt(s: string): number {
  let total = 0;

  for (let i = 0; i < s.length; ++i) {
    const number = ROMAN_CHAR_INT_MAP.get(s[i])!;

    if (i < s.length - 1) {
      if (number === 1 || number === 10 || number === 100) {
        // peek the next number
        const nextNumber = ROMAN_CHAR_INT_MAP.get(s[i + 1])!;

        if (nextNumber > number) {
          // if the next number is greater than current one, subtract it (IV => 1, 5 => 5 - 1)
          total += nextNumber - number;
          i++;

          continue;
        }
      }
    }

    total += number;
  }

  return total;
}

const ROMAN_CHAR_INT_MAP = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000]
]);

export default romanToInt;
