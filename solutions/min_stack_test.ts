import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import MinStack from "./min_stack.ts";

test("155. Min Stack", () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  assertStrictEq(minStack.getMin(), -3);
  minStack.pop();
  assertStrictEq(minStack.top(), 0);
  assertStrictEq(minStack.getMin(), -2);
});
