/**
 * Checks if value is a number
 * @param value The value to check
 * @returns boolean
 * @example
 * is.number(123) // true
 * is.number('123') // true
 * is.number(0) // true
 * is.number(1.3) // true
 * is.number([]) // false
 * is.number({}) // false
 * is.number('') // false
 */

export function number(value: unknown): boolean {
  /**
   * If value is a number and not NaN, return true
   */
  if (typeof value === "number" && !isNaN(value)) {
    return true;
  }

  /**
   * If value is a BigInt, return true
   */
  if (typeof value === "bigint") {
    return true;
  }

  /**
   * If value is a string, not empty, and is a number, return true
   */
  if (
    typeof value === "string" && value.trim() !== "" && !isNaN(Number(value))
  ) {
    return true;
  }

  return false;
}
