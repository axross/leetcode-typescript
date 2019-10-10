// 1119. Remove Vowels from a String
// https://leetcode.com/problems/remove-vowels-from-a-string/
export default function removeVowels2(S: string): string {
  return S.replace(/[aeiou]+/g, "");
}
