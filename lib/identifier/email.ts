/**
 * Check if value is a valid email
 * @param value - Value to check
 * @returns Whether the value is a valid email
 */
export function email(value: unknown): boolean {
  if (typeof value !== "string") {
    return false;
  }

  // Regular expression to validate email
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return pattern.test(value);
}
