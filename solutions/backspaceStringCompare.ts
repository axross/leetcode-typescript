// 844. Backspace String Compare
// https://leetcode.com/problems/backspace-string-compare/
function backspaceCompare(S: string, T: string): boolean {
  return emulateTyping(S) === emulateTyping(T);
}

function emulateTyping(strokes: string): string {
  const stack: string[] = [];

  for (let i = 0; i < strokes.length; ++i) {
    const stroke = strokes[i];

    if (stroke === "#") {
      stack.pop();

      continue;
    }

    stack.push(stroke);
  }

  return stack.join("");
}

export default backspaceCompare;
