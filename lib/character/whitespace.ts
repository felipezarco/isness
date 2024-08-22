/**
 * Checks if a string is entirely whitespace
 * @param value The value to check
 * @returns `true` if the string contains only whitespace characters, otherwise `false`.
 */
export function whitespace(value: unknown): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Check if the string consists only of whitespace characters
  return value.length > 0 && /^\s+$/.test(value);
}
