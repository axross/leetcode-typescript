import LRUCache from "./lruCache";

describe("146. LRU Cache", () => {
  test("#1", () => {
    const cache = new LRUCache(2);

    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.put(3, 3); // evicts key 2
    expect(cache.get(2)).toBe(-1);
    cache.put(4, 4); // evicts key 1
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(3)).toBe(3); // returns 3
    expect(cache.get(4)).toBe(4); // returns 4
  });

  test("#2", () => {
    const cache = new LRUCache(2);

    cache.put(2, 1);
    cache.put(1, 1);
    cache.put(2, 3);
    cache.put(4, 1);
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(3);
  });
});
