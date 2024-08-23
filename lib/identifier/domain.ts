/**
 * Check if value is a valid domain
 * @param value - Value to check
 * @returns Whether the value is a valid domain
 */
export default function domain(value: unknown): boolean {
  if (typeof value !== "string") {
    return false;
  }

  // Regular expression to validate domain
  const pattern = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/;

  return pattern.test(value);
}
