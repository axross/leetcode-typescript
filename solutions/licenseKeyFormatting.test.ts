import licenseKeyFormatting from "./licenseKeyFormatting";

describe("482. License Key Formatting", () => {
  const TEST_CASES = new Map<[string, number], string>([
    [["5F3Z-2e-9-w", 4], "5F3Z-2E9W"],
    [["2-5g-3-J", 2], "2-5G-3J"]
  ]);

  for (const [[s, k], expected] of TEST_CASES) {
    it(`returns ${expected} when called with ${s} and ${k}`, () => {
      expect(licenseKeyFormatting(s, k)).toBe(expected);
    });
  }
});
