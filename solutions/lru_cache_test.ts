import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import LRUCache from "./lru_cache.ts";

test("146. LRU Cache", () => {
  const lru1 = new LRUCache(2);

  lru1.put(1, 1);
  lru1.put(2, 2);
  assertStrictEq(lru1.get(1), 1);
  lru1.put(3, 3);
  assertStrictEq(lru1.get(2), -1);
  lru1.put(4, 4);
  assertStrictEq(lru1.get(1), -1);
  assertStrictEq(lru1.get(3), 3);
  assertStrictEq(lru1.get(4), 4);

  const lru2 = new LRUCache(2);

  lru2.put(2, 1);
  lru2.put(1, 1);
  lru2.put(2, 3);
  lru2.put(4, 1);
  assertStrictEq(lru2.get(1), -1);
  assertStrictEq(lru2.get(2), 3);
});
