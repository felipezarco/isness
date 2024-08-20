/**
 * Checks if the given value consists only of alphabetic characters.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is alphabetic, otherwise `false`.
 */
export function alphabetic(value: unknown): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Check if the string consists only of alphabetic characters
  return /^[a-zA-Z]+$/.test(value);
}

/**
 * Checks if the given value consists only of alphanumeric characters.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is alphanumeric, otherwise `false`.
 */
export function alphanumeric(value: unknown): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Check if the string consists only of alphanumeric characters
  return /^[a-zA-Z0-9]+$/.test(value);
}

/**
 * Checks if a string contains only ASCII characters
 * @param value The value to check
 * @returns `true` if the string contains only ASCII characters, otherwise `false`.
 */
export function ascii(value: unknown): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Check if the string contains only ASCII printable characters
  return /^[\x20-\x7E]*$/.test(value);
}

/**
 * Checks if a value is a single digit (0-9)
 * @param value The value to check
 * @returns `true` if the value is a single digit, otherwise `false`.
 */
export function digit(value: unknown): boolean {
  // Check if the value is a number and within the single digit range 0-9
  if (typeof value === "number" && value >= 0 && value <= 9) {
    return true;
  }

  // Check if the value is a string and represents a single digit
  if (
    typeof value === "string" && value.length === 1 && /^[0-9]$/.test(value)
  ) {
    return true;
  }

  // If neither condition is met, return false
  return false;
}

/**
 * Checks if a value is a valid hexadecimal string
 * @param value The value to check
 * @returns `true` if the value is a valid hexadecimal, otherwise `false`.
 */
export function hexadecimal(value: unknown): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Ensure string is not empty and matches a valid hexadecimal pattern
  return value.length > 0 && /^(0x)?[0-9a-fA-F]+$/.test(value);
}

/**
 * Checks if a string is entirely lowercase
 * @param str The string to check
 * @returns `true` if the string is entirely lowercase, otherwise `false`.
 */
export function lowercase(str: unknown): boolean {
  // Check if the value is a string
  if (typeof str !== "string") {
    return false;
  }

  // Ensure the string is not empty and contains only lowercase letters
  return str.length > 0 && /^[a-z]+$/.test(str);
}

/**
 * Checks if a string is entirely uppercase
 * @param value The value to check
 * @returns `true` if the string is entirely uppercase, otherwise `false`.
 */
export function uppercase(value: unknown): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Ensure the string is not empty and contains only uppercase letters
  return value.length > 0 && /^[A-Z]+$/.test(value);
}

/**
 * Checks if a string is entirely whitespace
 * @param value The value to check
 * @returns `true` if the string contains only whitespace characters, otherwise `false`.
 */
export function whitespace(value: unknown): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Check if the string consists only of whitespace characters
  return value.length > 0 && /^\s+$/.test(value);
}
