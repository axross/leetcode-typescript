// 412. Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/
function fizzBuzz(n: number): string[] {
  const arr: string[] = [];

  for (let i = 1; i <= n; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }

  return arr;
}

describe("412. Fizz Buzz", () => {
  test("#1", () => {
    expect(fizzBuzz(1)).toEqual(["1"]);
  });

  test("#2", () => {
    expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
  });

  test("#3", () => {
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  test("#4", () => {
    expect(fizzBuzz(20)).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
      "16",
      "17",
      "Fizz",
      "19",
      "Buzz"
    ]);
  });
});
