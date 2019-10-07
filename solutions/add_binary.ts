// 67. Add Binary
// https://leetcode.com/problems/add-binary/
export default function addBinary(a: string, b: string): string {
  let result = "";
  let isCarrying = false;

  for (let i = 1; i <= Math.max(a.length, b.length); ++i) {
    // check each digit one by one from the end
    // "0" is 48, "1" is 49 as charcode
    const aNum = (a.charCodeAt(a.length - i) || 48) - 48;
    const bNum = (b.charCodeAt(b.length - i) || 48) - 48;

    // reverse bit twice to cast boolean into 0 or 1
    const union: number = aNum + bNum + (isCarrying ? 1 : 0);

    // union is possibly 0, 1, 2, 3
    isCarrying = union >= 2;

    // 1 and 3 -> 1, 0 or 2 -> 0
    result = (union % 2) + result;
  }

  return isCarrying ? "1" + result : result;
}
