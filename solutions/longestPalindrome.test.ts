import longestPalindrome from "./longestPalindrome";

describe("409. Longest Palindrome", () => {
  const TEST_CASES = new Map([
    ["abccccdd", 7],
    ["bb", 2],
    ["aaaAaaaa", 7],
    ["zeusnilemacaronimaisanitratetartinasiaminoracamelinsuez", 55],
    [
      "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth",
      983
    ]
  ]);

  for (const [s, expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${s}`, () => {
      expect(longestPalindrome(s)).toBe(expected);
    });
  }
});
