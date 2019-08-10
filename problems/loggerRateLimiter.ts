// 359. Logger Rate Limiter
// https://leetcode.com/problems/logger-rate-limiter/
class Logger {
  lastPrintedSecondEachMessage = new Map<string, number>();

  shouldPrintMessage(timestamp: number, message: string): boolean {
    const lastPrinted = this.lastPrintedSecondEachMessage.get(message);

    if (lastPrinted === undefined || lastPrinted + 10 <= timestamp) {
      this.lastPrintedSecondEachMessage.set(message, timestamp);

      return true;
    }

    return false;
  }
}

describe("359. Logger Rate Limiter", () => {
  test("#1", () => {
    const logger = new Logger();

    expect(logger.shouldPrintMessage(1, "foo")).toBe(true);
    expect(logger.shouldPrintMessage(2, "bar")).toBe(true);
    expect(logger.shouldPrintMessage(3, "foo")).toBe(false);
    expect(logger.shouldPrintMessage(8, "bar")).toBe(false);
    expect(logger.shouldPrintMessage(10, "foo")).toBe(false);
    expect(logger.shouldPrintMessage(11, "foo")).toBe(true);
  });
});
