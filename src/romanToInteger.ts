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

//     while i < bytes.len() {
//         let (number, i_addition) = match (roman_char_byte_to_int(bytes[i]), i) {
//             (number, i) if i + 1 < bytes.len() => match number {
//                 1 | 10 | 100 => match roman_char_byte_to_int(bytes[i + 1]) {
//                     next_number if next_number > number => (next_number - number, 2),
//                     _ => (number, 1),
//                 },
//                 _ => (number, 1),
//             },
//             (number, _) => (number, 1),
//         };

//         total = total + number;
//         i = i + i_addition;
//     }

//     total
// }

// fn roman_to_int(s: String) -> i32 {

//     let bytes = s.as_bytes();
//     let mut total = 0;
//     let mut i = 0;

//     while i < bytes.len() {
//         let (number, i_addition) = match (roman_char_byte_to_int(bytes[i]), i) {
//             (number, i) if i + 1 < bytes.len() => match number {
//                 1 | 10 | 100 => match roman_char_byte_to_int(bytes[i + 1]) {
//                     next_number if next_number > number => (next_number - number, 2),
//                     _ => (number, 1),
//                 },
//                 _ => (number, 1),
//             },
//             (number, _) => (number, 1),
//         };

//         total = total + number;
//         i = i + i_addition;
//     }

//     total
// }

describe("13. Roman to Integer", () => {
  test("#1", () => {
    expect(romanToInt("VI")).toBe(6);
  });

  test("#2", () => {
    expect(romanToInt("IV")).toBe(4);
  });

  test("#3", () => {
    expect(romanToInt("III")).toBe(3);
  });

  test("#4", () => {
    expect(romanToInt("IIII")).toBe(4);
  });

  test("#5", () => {
    expect(romanToInt("XIII")).toBe(13);
  });

  test("#6", () => {
    expect(romanToInt("MDCLXVI")).toBe(1666);
  });

  test("#7", () => {
    expect(romanToInt("MCDCXLXIV")).toBe(1554);
  });

  test("#8", () => {
    expect(romanToInt("CMCDXCXLIXIV")).toBe(1443);
  });
});
