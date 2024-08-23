/**
 * Checks if a string is entirely uppercase
 * @param value The value to check
 * @returns `true` if the string is entirely uppercase, otherwise `false`.
 */
export default function uppercase(value: unknown): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Ensure the string is not empty and contains only uppercase letters
  return value.length > 0 && /^[A-Z]+$/.test(value);
}
