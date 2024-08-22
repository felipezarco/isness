/**
 * Checks if value is strictly boolean
 * @param value The value to check
 * @returns boolean
 */
export function boolean(value: unknown): boolean {
  return typeof value === "boolean";
}
