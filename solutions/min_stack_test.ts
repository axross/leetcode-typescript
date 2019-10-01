import { test } from "https://deno.land/std/testing/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import MinStack from "./min_stack.ts";

test("155. Min Stack", () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  assert(minStack.getMin() === -3);
  minStack.pop();
  assert(minStack.top() === 0);
  assert(minStack.getMin() === -2);
});
