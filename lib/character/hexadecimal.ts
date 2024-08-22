/**
 * Checks if a value is a valid hexadecimal string
 * @param value The value to check
 * @returns `true` if the value is a valid hexadecimal, otherwise `false`.
 */
export function hexadecimal(value: unknown): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Ensure string is not empty and matches a valid hexadecimal pattern
  return value.length > 0 && /^(0x)?[0-9a-fA-F]+$/.test(value);
}
