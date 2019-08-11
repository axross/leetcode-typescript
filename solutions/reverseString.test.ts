import reverseString from "./reverseString";

describe("344. Reverse String", () => {
  test("#1", () => {
    const characters = ["h", "e", "l", "l", "o"];

    reverseString(characters);

    expect(characters).toEqual(["o", "l", "l", "e", "h"]);
  });

  test("#2", () => {
    const characters = ["H", "a", "n", "n", "a", "h"];

    reverseString(characters);

    expect(characters).toEqual(["h", "a", "n", "n", "a", "H"]);
  });
});
