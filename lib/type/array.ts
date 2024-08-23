/**
 * Checks if value is an array
 * @param value The value to check
 * @returns boolean
 * @example
 * is.array([]) // true
 * is.array([1, 2, 3]) // true
 * is.array({}) // false
 * is.array('') // false
 * is.array(0) // false
 */
export default function array(value: unknown): boolean {
  return Array.isArray(value);
}
