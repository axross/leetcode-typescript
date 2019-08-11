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

export default numUniqueEmails;
