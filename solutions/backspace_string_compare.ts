// 844. Backspace String Compare
// https://leetcode.com/problems/backspace-string-compare/
export default function backspaceCompare(S: string, T: string): boolean {
  let s = S;
  let t = T;

  while (s.includes("#")) {
    s = s.replace(/([^#]#|^#+)/g, "");
  }

  while (t.includes("#")) {
    t = t.replace(/([^#]#|^#+)/g, "");
  }

  return s === t;
}
