import isAlienSorted from "./verifyingAnAlienDictionary";

describe("953. Verifying an Alien Dictionary", () => {
  test("#1", () => {
    expect(
      isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")
    ).toBe(true);
  });

  test("#2", () => {
    expect(
      isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
    ).toBe(false);
  });

  test("#3", () => {
    expect(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")).toBe(
      false
    );
  });
});
