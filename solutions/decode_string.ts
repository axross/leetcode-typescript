// 394. Decode String
// https://leetcode.com/problems/decode-string/
export default function decodeString(s: string): string {
  let decoded = "";
  let repeat = 0;
  let brackets = 0;
  let bracketFrom = 0;

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "[") {
      brackets += 1;

      if (brackets === 1) {
        bracketFrom = i;
      }
    } else if (s[i] === "]") {
      brackets -= 1;

      if (brackets === 0) {
        decoded += decodeString(s.substring(bracketFrom + 1, i)).repeat(repeat);
        repeat = 0;
      }
    } else if (brackets === 0) {
      if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
        repeat = repeat * 10 + s.charCodeAt(i) - 48;
      } else {
        decoded += s[i];
      }
    }
  }

  return decoded;
}
