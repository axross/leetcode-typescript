// 1220. Count Vowels Permutation
// https://leetcode.com/problems/count-vowels-permutation/
export default function countVowelPermutation(n: number): number {
  function traverse(nextChars: string[], n: number): number {
    if (n === 0) return 1;

    let permutation = 0;

    for (const char of nextChars) {
      const key = `${char}*${n}`;

      if (!memo.has(key)) {
        memo.set(key, traverse(NEXT_CHARS_EACH_CHAR.get(char), n - 1));
      }

      permutation += memo.get(key);
    }

    return permutation % DIVISOR;
  }

  return traverse(["a", "e", "i", "o", "u"], n);
}

const memo = new Map();

const DIVISOR = 1e9 + 7;

const NEXT_CHARS_EACH_CHAR = new Map([
  ["a", ["e"]],
  ["e", ["a", "i"]],
  ["i", ["a", "e", "o", "u"]],
  ["o", ["i", "u"]],
  ["u", ["a"]]
]);
