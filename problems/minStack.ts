// 155. Min Stack
// https://leetcode.com/problems/min-stack/
class MinStack {
  stack: number[] = [];
  stackInOrder: number[] = [];

  push(x: number): void {
    this.stack.push(x);

    if (this.stackInOrder.length === 0) {
      this.stackInOrder.push(x);
    } else {
      // just push to the stack if it's minimum value (ignoring non-minimum one)
      // -1, 2, -3, 4 -> [-1], [-1, -1], [-1, -1, -3], [-1, -1, -3, -3]
      this.stackInOrder.push(
        Math.min(this.stackInOrder[this.stackInOrder.length - 1], x)
      );
    }
  }

  pop(): void {
    this.stack.pop();
    this.stackInOrder.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.stackInOrder[this.stackInOrder.length - 1];
  }
}

describe("155. Min Stack", () => {
  test("#1", () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3);
    minStack.pop();
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toBe(-2);
  });
});
