import NumArray from "./rangeSumQueryImmutable";

describe("303. Range Sum Query - Immutable", () => {
  const TEST_CASES = new Map<[number[], [number, number][]], number[]>([
    [[[-2, 0, 3, -5, 2, -1], [[0, 2], [2, 5], [0, 5]]], [1, -1, -3]],
    [
      [
        [
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
        ],
        [
          [0, 8],
          [4, 5],
          [9, 11],
          [2, 11],
          [0, 12],
          [9, 12],
          [2, 5],
          [0, 9],
          [5, 9],
          [0, 1],
          [12, 12],
          [6, 7],
          [5, 8],
          [1, 1],
          [6, 7],
          [10, 11],
          [11, 12],
          [7, 8],
          [4, 11],
          [8, 9],
          [4, 11],
          [2, 9],
          [2, 6],
          [11, 12],
          [5, 8],
          [11, 11],
          [1, 9],
          [12, 12],
          [10, 10],
          [4, 7],
          [12, 12],
          [8, 10],
          [7, 9],
          [4, 7],
          [0, 7],
          [8, 9],
          [10, 12],
          [0, 9],
          [10, 12],
          [7, 12],
          [9, 9],
          [0, 12],
          [1, 3],
          [8, 8],
          [7, 10]
        ]
      ],
      [
        4830,
        6383,
        -15886,
        -5095,
        -15759,
        -20589,
        11228,
        -1149,
        -9683,
        -5961,
        -4703,
        -6688,
        -3704,
        2300,
        -6688,
        -9907,
        -9319,
        -1851,
        -9940,
        272,
        -9940,
        4812,
        12642,
        -9319,
        -3704,
        -4616,
        7112,
        -4703,
        -5291,
        -305,
        -4703,
        -5019,
        -7830,
        -305,
        -1421,
        272,
        -14610,
        -1149,
        -14610,
        -22440,
        -5979,
        -15759,
        7145,
        6251,
        -13121
      ]
    ]
  ]);

  for (const [[initial, ranges], expectedValuesEachRange] of TEST_CASES) {
    describe(`NumArray([${initial}])`, () => {
      const numArray = new NumArray(initial);

      for (const i of ranges.keys()) {
        it(`.sumRange(${ranges[i][0]}, ${ranges[i][1]}) returns ${expectedValuesEachRange[i]}`, () => {
          expect(numArray.sumRange(ranges[i][0], ranges[i][1])).toBe(
            expectedValuesEachRange[i]
          );
        });
      }
    });
  }
});
