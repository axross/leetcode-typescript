// 953. Verifying an Alien Dictionary
// https://leetcode.com/problems/verifying-an-alien-dictionary/
export default function isAlienSorted(words: string[], order: string): boolean {
  // make shallow copy to delete checked words below
  let _words = [...words];
  let i = 0;

  // repeat until there's no word to search (only one word means no need to search)
  while (_words.length > 1) {
    // previous alian's char code at the index for each word
    let previousAlianCharCode = null;

    for (const word of _words) {
      // blank character is -1
      const alianCharCode = order.indexOf(word[i]);

      if (previousAlianCharCode) {
        // if current word's letter comes before the previous one, it's invalid
        if (alianCharCode < previousAlianCharCode) {
          return false;
        }

        if (alianCharCode > previousAlianCharCode) {
          // if current word's letter letter comes after the previous one,
          // delete the word from search list because it's no need to check anymore
          _words = _words.filter(w => w !== word);
        }
      }

      previousAlianCharCode = alianCharCode;
    }

    i += 1;
  }

  return true;
}
