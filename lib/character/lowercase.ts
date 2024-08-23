/**
 * Checks if a string is entirely lowercase
 * @param str The string to check
 * @returns `true` if the string is entirely lowercase, otherwise `false`.
 */
export default function lowercase(str: unknown): boolean {
  // Check if the value is a string
  if (typeof str !== "string") {
    return false;
  }

  // Ensure the string is not empty and contains only lowercase letters
  return str.length > 0 && /^[a-z]+$/.test(str);
}
