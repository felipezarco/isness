/**
 * Checks if the given value consists only of alphanumeric characters.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is alphanumeric, otherwise `false`.
 */
export function alphanumeric(value: unknown): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Check if the string consists only of alphanumeric characters
  return /^[a-zA-Z0-9]+$/.test(value);
}
