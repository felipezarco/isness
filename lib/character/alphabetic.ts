/**
 * Checks if the given value consists only of alphabetic characters.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is alphabetic, otherwise `false`.
 */
export default function alphabetic(value: unknown): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Check if the string consists only of alphabetic characters
  return /^[a-zA-Z]+$/.test(value);
}
