import { test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import {
  createLinkedListNode,
  getNthNode
} from "../data_structures/linked_list.ts";
import hasCycle from "./linked_list_cycle.ts";

test("141. Linked List Cycle", () => {
  const node1 = createLinkedListNode([3, 2, 0, -4])!;

  getNthNode(node1, -1).next = getNthNode(node1, 1);

  assertStrictEq(hasCycle(node1), true);

  const node2 = createLinkedListNode([3, 2, 0, -4])!;

  assertStrictEq(hasCycle(node2), false);

  const node3 = createLinkedListNode([3, 2, 0, -4])!;

  getNthNode(node3, -1).next = getNthNode(node3, 3);

  assertStrictEq(hasCycle(node3), true);
});
