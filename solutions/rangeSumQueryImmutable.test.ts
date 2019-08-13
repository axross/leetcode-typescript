import NumArray from "./rangeSumQueryImmutable";

describe("303. Range Sum Query - Immutable", () => {
  test("#1", () => {
    const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

    expect(numArray.sumRange(0, 2)).toBe(1);
    expect(numArray.sumRange(2, 5)).toBe(-1);
    expect(numArray.sumRange(0, 5)).toBe(-3);
  });

  test("#2", () => {
    const numArray = new NumArray([
      -8261,
      2300,
      -1429,
      6274,
      9650,
      -3267,
      1414,
      -8102,
      6251,
      -5979,
      -5291,
      -4616,
      -4703
    ]);

    expect(numArray.sumRange(0, 8)).toBe(4830);
    expect(numArray.sumRange(4, 5)).toBe(6383);
    expect(numArray.sumRange(9, 11)).toBe(-15886);
    expect(numArray.sumRange(2, 11)).toBe(-5095);
    expect(numArray.sumRange(0, 12)).toBe(-15759);
    expect(numArray.sumRange(9, 12)).toBe(-20589);
    expect(numArray.sumRange(2, 5)).toBe(11228);
    expect(numArray.sumRange(0, 9)).toBe(-1149);
    expect(numArray.sumRange(5, 9)).toBe(-9683);
    expect(numArray.sumRange(0, 1)).toBe(-5961);
    expect(numArray.sumRange(12, 12)).toBe(-4703);
    expect(numArray.sumRange(6, 7)).toBe(-6688);
    expect(numArray.sumRange(5, 8)).toBe(-3704);
    expect(numArray.sumRange(1, 1)).toBe(2300);
    expect(numArray.sumRange(6, 7)).toBe(-6688);
    expect(numArray.sumRange(10, 11)).toBe(-9907);
    expect(numArray.sumRange(11, 12)).toBe(-9319);
    expect(numArray.sumRange(7, 8)).toBe(-1851);
    expect(numArray.sumRange(4, 11)).toBe(-9940);
    expect(numArray.sumRange(8, 9)).toBe(272);
    expect(numArray.sumRange(4, 11)).toBe(-9940);
    expect(numArray.sumRange(2, 9)).toBe(4812);
    expect(numArray.sumRange(2, 6)).toBe(12642);
    expect(numArray.sumRange(11, 12)).toBe(-9319);
    expect(numArray.sumRange(5, 8)).toBe(-3704);
    expect(numArray.sumRange(11, 11)).toBe(-4616);
    expect(numArray.sumRange(1, 9)).toBe(7112);
    expect(numArray.sumRange(12, 12)).toBe(-4703);
    expect(numArray.sumRange(10, 10)).toBe(-5291);
    expect(numArray.sumRange(4, 7)).toBe(-305);
    expect(numArray.sumRange(12, 12)).toBe(-4703);
    expect(numArray.sumRange(8, 10)).toBe(-5019);
    expect(numArray.sumRange(7, 9)).toBe(-7830);
    expect(numArray.sumRange(4, 7)).toBe(-305);
    expect(numArray.sumRange(0, 7)).toBe(-1421);
    expect(numArray.sumRange(8, 9)).toBe(272);
    expect(numArray.sumRange(10, 12)).toBe(-14610);
    expect(numArray.sumRange(0, 9)).toBe(-1149);
    expect(numArray.sumRange(10, 12)).toBe(-14610);
    expect(numArray.sumRange(7, 12)).toBe(-22440);
    expect(numArray.sumRange(9, 9)).toBe(-5979);
    expect(numArray.sumRange(0, 12)).toBe(-15759);
    expect(numArray.sumRange(1, 3)).toBe(7145);
    expect(numArray.sumRange(8, 8)).toBe(6251);
    expect(numArray.sumRange(7, 10)).toBe(-13121);
  });
});
