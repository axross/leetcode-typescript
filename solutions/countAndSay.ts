// 38. Count and Say
// https://leetcode.com/problems/count-and-say/
function countAndSay(n: number): string {
  function recursion(string: string): string {
    let lastChar = string[0];
    let lastCharStreak = 0;
    let result = "";

    for (let i = 0; i < string.length; ++i) {
      if (string[i] === lastChar) {
        lastCharStreak += 1;

        continue;
      } else {
        result += `${lastCharStreak}${lastChar}`;

        lastChar = string[i];
        lastCharStreak = 1;
      }
    }

    result += `${lastCharStreak}${lastChar}`;

    return result;
  }

  let result = "1";

  for (let i = 1; i < n; ++i) {
    result = recursion(result);
  }

  return result;
}

export default countAndSay;
