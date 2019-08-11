import reorderLogFiles from "./reorderLogFiles";

describe("937. Reorder Log Files", () => {
  test("#1", () => {
    expect(
      reorderLogFiles([
        "a1 9 2 3 1",
        "g1 act car",
        "zo4 4 7",
        "ab1 off key dog",
        "a8 act zoo"
      ])
    ).toEqual([
      "g1 act car",
      "a8 act zoo",
      "ab1 off key dog",
      "a1 9 2 3 1",
      "zo4 4 7"
    ]);
  });

  test("#2", () => {
    expect(
      reorderLogFiles([
        "a1 9 2 3 1",
        "g1 act car",
        "zo4 4 7",
        "ab1 off key dog",
        "a8 act zoo",
        "a2 act car"
      ])
    ).toEqual([
      "a2 act car",
      "g1 act car",
      "a8 act zoo",
      "ab1 off key dog",
      "a1 9 2 3 1",
      "zo4 4 7"
    ]);
  });

  test("#3", () => {
    expect(
      reorderLogFiles(["j mo", "5 m w", "g 07", "o 2 0", "t q h"])
    ).toEqual(["5 m w", "j mo", "t q h", "g 07", "o 2 0"]);
  });

  test("#4", () => {
    expect(
      reorderLogFiles([
        "6p tzwmh ige mc",
        "ns 566543603829",
        "ubd cujg j d yf",
        "ha6 1 938 376 5",
        "3yx 97 666 56 5",
        "d 84 34353 2249",
        "0 tllgmf qp znc",
        "s 1088746413789",
        "ys0 splqqxoflgx",
        "uhb rfrwt qzx r",
        "u lrvmdt ykmox",
        "ah4 4209164350",
        "rap 7729 8 125",
        "4 nivgc qo z i",
        "apx 814023338 8"
      ])
    ).toEqual([
      "ubd cujg j d yf",
      "u lrvmdt ykmox",
      "4 nivgc qo z i",
      "uhb rfrwt qzx r",
      "ys0 splqqxoflgx",
      "0 tllgmf qp znc",
      "6p tzwmh ige mc",
      "ns 566543603829",
      "ha6 1 938 376 5",
      "3yx 97 666 56 5",
      "d 84 34353 2249",
      "s 1088746413789",
      "ah4 4209164350",
      "rap 7729 8 125",
      "apx 814023338 8"
    ]);
  });
});
