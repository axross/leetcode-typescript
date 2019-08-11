import solution from "./firstBadVersion";

describe("278. First Bad Version", () => {
  test("#1", () => {
    const findFirstBadVersion = solution(version => version >= 4);

    expect(findFirstBadVersion(5)).toBe(4);
    expect(findFirstBadVersion(10)).toBe(4);
  });
});
