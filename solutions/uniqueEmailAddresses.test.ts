import numUniqueEmails from "./uniqueEmailAddresses";

describe("929. Unique Email Addresses", () => {
  const TEST_CASES = new Map([
    [
      [
        "test.email+alex@leetcode.com",
        "test.e.mail+bob.cathy@leetcode.com",
        "testemail+david@lee.tcode.com"
      ],
      2
    ],
    [
      [
        "testemail@leetcode.com",
        "testemail1@leetcode.com",
        "testemail+david@lee.tcode.com"
      ],
      3
    ]
  ]);

  for (const [emails, expected] of TEST_CASES) {
    it(`returns ${expected} when called with [${emails}]`, () => {
      expect(numUniqueEmails(emails)).toBe(expected);
    });
  }
});
