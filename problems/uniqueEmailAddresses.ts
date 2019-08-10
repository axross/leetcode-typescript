// 929. Unique Email Addresses
// https://leetcode.com/problems/unique-email-addresses/
function numUniqueEmails(emails: string[]): number {
  const unique = new Set();

  for (const email of emails) {
    // replace by patterns. check https://regexr.com/4j15p
    unique.add(email.replace(/(\+.*|\.)(?=.*@)/g, ""));
  }

  return unique.size;
}

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
