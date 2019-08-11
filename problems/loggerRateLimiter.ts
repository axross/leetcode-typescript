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

export default Logger;
