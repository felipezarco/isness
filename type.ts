
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
 * Checks if value is a boolean
 * @param value The value to check
 * @returns boolean
 */
export function boolean(value: any): boolean {
  return typeof value === 'boolean';
}

