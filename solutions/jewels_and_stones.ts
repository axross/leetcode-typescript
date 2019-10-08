// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/
export default function numJewelsInStones(
  jewelChars: string,
  stoneChars: string
) {
  const jewels = new Set([...jewelChars]);
  let jewelCount = 0;

  for (const s of stoneChars) {
    if (jewels.has(s)) {
      jewelCount += 1;
    }
  }

  return jewelCount;
}
