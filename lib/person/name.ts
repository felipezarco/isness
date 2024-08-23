/**
 * Checks if the given name is valid.
 * @param name
 * @returns
 */

export default function name(name: unknown): boolean {
  // Check if the value is a string
  if (typeof name !== "string") {
    return false;
  }

  // Regular expression to allow letters from any language, spaces, hyphens, and apostrophes.
  const nameRegex = /^[\p{L}\p{M}]+(?:[\p{L}\p{M}\s'’-])*$/u;

  // Check if name is not empty and matches the regex
  if (!name || name.length < 2 || name.length > 100) {
    return false; // Ensure the name has a reasonable length
  }

  // Check if the string consists only of alphabetic characters
  return nameRegex.test(name);
}
