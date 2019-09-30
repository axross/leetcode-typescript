import { createSinglyLinkedListNode, getNthNode } from "./LinkedList";

describe("createSinglyLinkedListNode", () => {
  test("creates SinglyLinkedListNode by an array #1", () => {
    expect(createSinglyLinkedListNode([1, 2, 3, 4, 5, 6, 7])).toEqual({
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

  test("creates SinglyLinkedListNode by an array #2", () => {
    expect(createSinglyLinkedListNode([1])).toEqual({
      val: 1,
      next: null
    });
  });

  test("returns null if the given array has no element", () => {
    expect(createSinglyLinkedListNode([])).toBe(null);
  });
});

describe("getNthNode()", () => {
  it("returns the first node in a linked list if called with 0 index", () => {
    const head = createSinglyLinkedListNode([0, 1, 2, 3, 4, 5])!;

    expect(getNthNode(head, 0).val).toBe(0);
  });

  it("returns the 3rd node in a linked list if called with 2 index", () => {
    const head = createSinglyLinkedListNode([0, 1, 2, 3, 4, 5])!;

    expect(getNthNode(head, 2).val).toBe(2);
  });

  it("returns the last node in a linked list if called with -1 index", () => {
    const head = createSinglyLinkedListNode([0, 1, 2, 3, 4, 5])!;

    expect(getNthNode(head, -1)).toBe(getNthNode(head, 5));
  });

  it("returns the 3rd node from the tail in a linked list if called with -3 index", () => {
    const head = createSinglyLinkedListNode([0, 1, 2, 3, 4, 5])!;

    expect(getNthNode(head, -3)).toBe(getNthNode(head, 3));
  });

  it("doesn't mutates the given linked list at all", () => {
    const head = createSinglyLinkedListNode([0, 1, 2, 3, 4, 5])!;

    getNthNode(head, 1);
    getNthNode(head, 2);
    getNthNode(head, 3);

    expect(getNthNode(head, 2).val).toBe(2);
  });

  it("throws an Error if the index is out of bounds (when called with 7 for a 6-nodes linked list)", () => {
    const head = createSinglyLinkedListNode([0, 1, 2, 3, 4, 5])!;

    expect(() => getNthNode(head, 7)).toThrow(Error);
  });

  it("throws an Error if the index is out of bounds (when called with -7 for a 6-nodes linked list)", () => {
    const head = createSinglyLinkedListNode([0, 1, 2, 3, 4, 5])!;

    expect(() => getNthNode(head, -7)).toThrow(Error);
  });

  it("throws a TypeError if the index is not an integer", () => {
    const head = createSinglyLinkedListNode([0, 1, 2, 3, 4, 5])!;

    expect(() => getNthNode(head, 1.1)).toThrow(TypeError);
    expect(() => getNthNode(head, Infinity)).toThrow(TypeError);
    expect(() => getNthNode(head, -Infinity)).toThrow(TypeError);
    expect(() => getNthNode(head, NaN)).toThrow(TypeError);
  });
});
