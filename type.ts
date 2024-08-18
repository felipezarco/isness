
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
export function array(value: any): boolean {
  return Array.isArray(value);
}

/**
 * Checks if value is a string
 * @param value The value to check
 * @returns boolean
 */
export function string(value: any): boolean {
  return typeof value === 'string';
}

/**
 * Checks if value is strictly boolean
 * @param value The value to check
 * @returns boolean
 */
export function boolean(value: any): boolean {
  return typeof value === 'boolean';
}

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
export function booleanLike(value: any): boolean {
  return [true, false, 'true', 'false', '1', '0', 1, 0].includes(value);
}

