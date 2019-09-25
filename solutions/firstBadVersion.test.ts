import solution from "./firstBadVersion";

describe("278. First Bad Version", () => {
  it("returns a function to detect the first bad version", () => {
    const findFirstBadVersion = solution(version => version >= 4);

    expect(findFirstBadVersion(5)).toBe(4);
    expect(findFirstBadVersion(10)).toBe(4);
  });
});
