/**
 * Checks if value is boolean-like
 * @param value The value to check
 * @returns boolean
 * @example
 * is.booleanLike(true) // true
 * is.booleanLike(false) // true
 * is.booleanLike('true') // true
 * is.booleanLike('false') // true
 * is.booleanLike(1) // true
 * is.booleanLike(0) // true
 * is.booleanLike('1') // true
 * is.booleanLike('0') // true
 * is.booleanLike('') // false
 * is.booleanLike([]) // false
 * is.booleanLike({}) // false
 * is.booleanLike(null) // false
 * is.booleanLike(undefined) // false
 */
export function booleanLike(value: unknown): boolean {
  if (typeof value === "boolean") return true;
  if (value === "true") return true;
  if (value === "false") return true;
  if (value === "1") return true;
  if (value === "0") return true;
  if (value === 1) return true;
  if (value === 0) return true;
  return false;
}
