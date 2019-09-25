import LRUCache from "./lruCache";

describe("146. LRU Cache", () => {
  const TEST_CASES = new Map<[string[], number[][]], (number | void)[]>([
    [
      [
        [
          "LRUCache",
          "put",
          "put",
          "get",
          "put",
          "get",
          "put",
          "get",
          "get",
          "get"
        ],
        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
      ],
      [undefined, undefined, undefined, 1, undefined, -1, undefined, -1, 3, 4]
    ],
    [
      [
        ["LRUCache", "put", "put", "put", "put", "get", "get"],
        [[2], [2, 1], [1, 1], [2, 3], [4, 1], [1], [2]]
      ],
      [undefined, undefined, undefined, undefined, undefined, -1, 3]
    ]
  ]);

  for (const [
    [operations, operationArgs],
    expectedValuesEachOperation
  ] of TEST_CASES) {
    it(`manages key-value pairs with fixed sized space`, () => {
      let cache: LRUCache;

      for (const i of operations.keys()) {
        switch (operations[i]) {
          case "LRUCache":
            cache = new LRUCache(operationArgs[i][0]);
            break;
          case "put":
            cache!.put(operationArgs[i][0], operationArgs[i][1]);
            break;
          case "get":
            expect(cache!.get(operationArgs[i][0])).toBe(
              expectedValuesEachOperation[i]
            );
            break;
        }
      }
    });
  }
});
