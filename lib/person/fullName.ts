/**
 * Checks if the given value is valid full fullName.
 * @param fullName
 * @returns
 */

export default function fullName(value: unknown): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Regular expression to allow letters from any language, spaces, hyphens, and apostrophes.
  const fullNameRegex = /^[\p{L}\p{M}]+(?:[\p{L}\p{M}\s'’-])*$/u;

  if (!value || value.length < 2 || value.length > 100) {
    return false; // Ensure the value has a reasonable length
  }

  // check if has at least two names with above test
  const names = String(value).trim().split(" ");

  if (names.length < 2) {
    return false;
  }

  return names.every((name) => name != "undefined" && fullNameRegex.test(name));
}
