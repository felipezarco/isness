/**
 * Checks if a string contains only ASCII characters
 * @param value The value to check
 * @returns `true` if the string contains only ASCII characters, otherwise `false`.
 */
export function ascii(value: unknown): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Check if the string contains only ASCII printable characters
  return /^[\x20-\x7E]*$/.test(value);
}
