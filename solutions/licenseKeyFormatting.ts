// 482. License Key Formatting
// https://leetcode.com/problems/license-key-formatting/
function licenseKeyFormatting(S: string, K: number): string {
  const squashed = S.replace(/-/g, "");
  let formatted = "";

  for (let i = 0; i > -squashed.length; i -= K) {
    const formattedPart = squashed.slice(i - K, i === 0 ? undefined : i);

    formatted = formattedPart + (i === 0 ? "" : "-") + formatted;
  }

  return formatted.toUpperCase();
}

export default licenseKeyFormatting;
