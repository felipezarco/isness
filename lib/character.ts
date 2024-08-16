/**
 * Checks if a string is alphabetic
 * @param str The string to check
 */
export function alphabetic(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}

/**
 * Checks if a string is alphanumeric
 * @param str The string to check
 */
export function alphanumeric(str: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(str);
}

/**
 * Checks if a string is ascii
 * @param str The string to check
 * @returns boolean
 */
export function ascii(str: string): boolean {
  return /^[\x00-\xFF]+$/.test(str);
}

/**
 * Checks if a string is a digit
 * @param str The string to check
 */
export function digit(str: string): boolean {
  return /^[0-9]$/.test(str)
}

/**
 * Checks if a string is hexadecimal
 * @param str The string to check
 * @returns boolean
 */
export function hexadecimal(str: string): boolean {
  return /^[0-9a-fA-F]+$/.test(str);
}

/**
 * Checks if a string is lowercase
 * @param str The string to check
 * @returns boolean
 */
export function lowercase(str: string): boolean {
  return /^[a-z]+$/.test(str);
}

/**
 * Checks if a string is uppercase
 * @param str The string to check
 * @returns boolean
 */
export function uppercase(str: string): boolean {
  return /^[A-Z]+$/.test(str);
}

/**
 * Checks if a string is a whitespace
 * @param str The string to check
 */
export function whitespace(str: string): boolean {
  return /^\s+$/.test(str);
}
