import { createListNode } from "./ListNode";

describe("createListNode", () => {
  test("creates ListNode by an array #1", () => {
    expect(createListNode([1, 2, 3, 4, 5, 6, 7])).toEqual({
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: {
                val: 6,
                next: {
                  val: 7,
                  next: null
                }
              }
            }
          }
        }
      }
    });
  });

  test("creates ListNode by an array #2", () => {
    expect(createListNode([1])).toEqual({
      val: 1,
      next: null
    });
  });

  test("throws if the given array has no element", () => {
    expect(() => createListNode([])).toThrow(TypeError);
  });
});
