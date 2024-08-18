/**
 * Checks if a string is alphabetic
 * @param str The string to check
 * @returns boolean
 */
export function alphabetic(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}


/**
 * Checks if the given string consists only of alphanumeric characters.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is alphanumeric, otherwise `false`.
 */
export function alphanumeric(str: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(str);
}

/**
 * Checks if a string is ascii
 * @param str The string to check
 * @returns `true` if the string is ascii, otherwise `false`.
 */
export function ascii(str: string): boolean {
  return /^[\x00-\xFF]+$/.test(str);
}

/**
 * Checks if a string is a digit
 * @param str The string to check
 * @returns `true` if the string is a digit, otherwise `false`.
 */
export function digit(str: string): boolean {
  return /^[0-9]$/.test(str)
}

/**
 * Checks if a string is hexadecimal
 * @param str The string to check
 * @returns `true` if the string is hexadecimal, otherwise `false`.
 */
export function hexadecimal(str: string): boolean {
  return /^[0-9a-fA-F]+$/.test(str);
}

/**
 * Checks if a string is lowercase
 * @param str The string to check
 * @returns `true` if the string is lowercase, otherwise `false`.
 */
export function lowercase(str: string): boolean {
  return /^[a-z]+$/.test(str);
}

/**
 * Checks if a string is uppercase
 * @param str The string to check
 * @returns `true` if the string is uppercase, otherwise `false`.
 */
export function uppercase(str: string): boolean {
  return /^[A-Z]+$/.test(str);
}

/**
 * Checks if a string is a whitespace
 * @param str The string to check
 * @returns `true` if the string is a whitespace, otherwise `false`.
 */
export function whitespace(str: string): boolean {
  return /^\s+$/.test(str);
}
