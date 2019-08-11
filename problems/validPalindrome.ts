// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/
function isPalindrome(s: string): boolean {
  const sanitized = [];

  for (let i = 0; i < s.length; ++i) {
    const charCode = s.charCodeAt(i);

    if (
      // 0-9
      (charCode >= 48 && charCode <= 57) ||
      // a-z
      (charCode >= 97 && charCode <= 122)
    ) {
      sanitized.push(s[i]);
    }

    // A-Z
    if (charCode >= 65 && charCode <= 90) {
      // A-Z -> a-z
      sanitized.push(String.fromCharCode(charCode + 32));
    }

    // do nothing to ignore other characters
  }

  for (let i = 0; i < sanitized.length / 2; ++i) {
    if (sanitized[i] !== sanitized[sanitized.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

export default isPalindrome;
