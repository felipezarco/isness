/**
 * Checks if value is a string
 * @param value The value to check
 * @returns boolean
 */
export function string(value: unknown): boolean {
  return typeof value === "string";
}
