import numUniqueEmails from "./uniqueEmailAddresses";

describe("929. Unique Email Addresses", () => {
  test("#1", () => {
    expect(
      numUniqueEmails([
        "test.email+alex@leetcode.com",
        "test.e.mail+bob.cathy@leetcode.com",
        "testemail+david@lee.tcode.com"
      ])
    ).toBe(2);
  });

  test("#2", () => {
    expect(
      numUniqueEmails([
        "testemail@leetcode.com",
        "testemail1@leetcode.com",
        "testemail+david@lee.tcode.com"
      ])
    ).toBe(3);
  });
});
