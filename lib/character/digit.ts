/**
 * Checks if a value is a single digit (0-9)
 * @param value The value to check
 * @returns `true` if the value is a single digit, otherwise `false`.
 */
export default function digit(value: unknown): boolean {
  // Check if the value is a number and within the single digit range 0-9
  if (typeof value === "number" && value >= 0 && value <= 9) {
    return true;
  }

  // Check if the value is a string and represents a single digit
  if (
    typeof value === "string" && value.length === 1 && /^[0-9]$/.test(value)
  ) {
    return true;
  }

  // If neither condition is met, return false
  return false;
}
