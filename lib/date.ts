/** Check if value is a date
 * @param value - the value to check
 * @param options - an object with a format property to specify the date format (ISO8601, American, European, Asian)
 * @returns boolean
 */
export function date(value: any, options?: { format: 'ISO8601' | 'American' | 'European' | 'Asian' }): boolean {
  // Check if value is an instance of Date and valid
  if (value instanceof Date && !isNaN(value.getTime())) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  const patterns = {
    // ISO 8601 format: Requires Z or offset when milliseconds are present, otherwise optional
    ISO8601: /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2})?(\.\d{3}(Z|[+-]\d{2}:\d{2}))?)?$/,

    // American format: No milliseconds or timezone allowed
    American: /^\d{2}\/\d{2}\/\d{4}( \d{2}:\d{2}(:\d{2})?)?$/,

    // European format: No milliseconds or timezone allowed
    European: /^\d{2}\/\d{2}\/\d{4}( \d{2}:\d{2}(:\d{2})?)?$/,

    // Asian format: No milliseconds or timezone allowed
    Asian: /^\d{4}\/\d{2}\/\d{2}( \d{2}:\d{2}(:\d{2})?)?$/,
  };

  // If format option is specified, validate against the selected format
  if (options?.format && patterns[options.format]) {
    return patterns[options.format].test(value);
  }

  // If no format is specified, check against all formats
  for (const format in patterns) {
    if (patterns[format as keyof typeof patterns].test(value)) {
      return true;
    }
  }

  return false;
}
