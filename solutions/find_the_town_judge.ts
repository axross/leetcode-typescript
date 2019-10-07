// 997. Find the Town Judge
// https://leetcode.com/problems/find-the-town-judge/
export default function findJudge(
  N: number,
  trust: [number, number][]
): number {
  const powers = new Array(N).fill(0);

  for (const [from, to] of trust) {
    powers[from - 1] = -Infinity;
    powers[to - 1] += 1;
  }

  const judge = powers.findIndex(power => power === N - 1);

  return judge === -1 ? -1 : judge + 1;
}
