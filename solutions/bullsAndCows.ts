// 299. Bulls and Cows
// https://leetcode.com/problems/bulls-and-cows/
function getHint(secret: string, guess: string): string {
  let bullsCount = 0;
  let cowsCount = 0;
  // arrays in javascript is hashmap. actually it runs even without parseInt() below
  let unmatchNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < secret.length; ++i) {
    const [s, g] = [parseInt(secret[i]), parseInt(guess[i])];

    if (s === g) {
      bullsCount += 1;

      continue;
    }

    // it's greater than 0 only when it's already found in guess number
    if (unmatchNumbers[s] >= 1) {
      cowsCount += 1;
    }

    unmatchNumbers[s] -= 1;

    // it's less than 0 only when it's already found in secret number
    if (unmatchNumbers[g] <= -1) {
      cowsCount += 1;
    }

    unmatchNumbers[g] += 1;
  }

  return `${bullsCount}A${cowsCount}B`;
}

export default getHint;
