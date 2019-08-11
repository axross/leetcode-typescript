import licenseKeyFormatting from "./licenseKeyFormatting";

describe("482. License Key Formatting", () => {
  test("#1", () => {
    expect(licenseKeyFormatting("5F3Z-2e-9-w", 4)).toBe("5F3Z-2E9W");
  });

  test("#2", () => {
    expect(licenseKeyFormatting("2-5g-3-J", 2)).toBe("2-5G-3J");
  });
});
