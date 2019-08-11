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

export default MinStack;
