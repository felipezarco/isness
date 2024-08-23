/**
 * Checks if value is strictly boolean
 * @param value The value to check
 * @returns boolean
 */
export default function boolean(value: unknown): boolean {
  return typeof value === "boolean";
}
