// 937. Reorder Log Files
// https://leetcode.com/problems/reorder-log-files/
function reorderLogFiles(logs: string[]): string[] {
  const digitLogs = [];
  const letterLogs = [];

  // divide logs into digit logs and letter logs
  for (const log of logs) {
    // find the first whitespace and get the next letter
    // numbers are 48-57. all letters are after them
    if (log[log.indexOf(" ") + 1].charCodeAt(0) <= 57) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  }

  letterLogs.sort((a, b) => {
    // divide both a and b into id and payload
    const firstWhitespaceInA = a.indexOf(" ");
    const aId = a.slice(0, firstWhitespaceInA);
    const aPayload = a.slice(firstWhitespaceInA + 1);
    const firstWhitespaceInB = b.indexOf(" ");
    const bId = b.slice(0, firstWhitespaceInB);
    const bPayload = b.slice(firstWhitespaceInB + 1);

    // compare these payloads first
    if (aPayload < bPayload) {
      return -1;
    }

    if (aPayload > bPayload) {
      return 1;
    }

    // if these payloads are same, then compare these ids
    if (aId < bId) {
      return -1;
    }

    if (aId > bId) {
      return 1;
    }

    // exactly same
    return 0;
  });

  // merge
  return [...letterLogs, ...digitLogs];
}

export default reorderLogFiles;
