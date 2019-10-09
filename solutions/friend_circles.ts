// 547. Friend Circles
// https://leetcode.com/problems/friend-circles/
export default function findCircleNum(relationships: number[][]): number {
  const friendCircles: Set<number>[] = [];
  const visited = new Set<number>();

  function traverse(person: number, friendCircle: Set<number>) {
    if (visited.has(person)) return;

    friendCircle.add(person);
    visited.add(person);

    for (const [other, isFriend] of relationships[person].entries()) {
      if (isFriend !== 1) continue;

      traverse(other, friendCircle);
    }
  }

  for (const person of relationships.keys()) {
    if (visited.has(person)) continue;

    friendCircles.push(new Set());

    traverse(person, friendCircles[friendCircles.length - 1]);
  }

  return friendCircles.length;
}
