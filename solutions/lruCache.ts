// 146. LRU Cache
// https://leetcode.com/problems/lru-cache/
class LRUCache {
  constructor(capacity: number) {
    this.capacity = capacity;
  }

  capacity: number;
  cache: Map<number, number> = new Map();

  get(key: number): number {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key)!;

    // delete and set to move the value to the tail (most recent)
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      // delete to move the value to the tail (most recent)
      this.cache.delete(key);
    } else if (this.cache.size === this.capacity) {
      // delete the head (least recent) value
      this.cache.delete(this.cache.keys().next().value);
    }

    // put the value to the tail (most recent)
    this.cache.set(key, value);
  }
}

export default LRUCache;
