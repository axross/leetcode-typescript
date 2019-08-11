// 246. Strobogrammatic Number
// https://leetcode.com/problems/strobogrammatic-number/
function isStrobogrammatic(num: string): boolean {
  // pick one by one from both of the head and tail
  for (let i = 0, j = num.length - 1; i < num.length / 2; ++i, --j) {
    const [ni, nj] = [num[i], num[j]];

    if ((ni === "6" && nj === "9") || (ni === "9" && nj === "6")) continue;
    if (ni === nj && (ni === "0" || ni === "1" || ni === "8")) continue;

    return false;
  }

  return true;
}

export default isStrobogrammatic;
