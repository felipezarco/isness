/**
 * Checks if the given value is a valid date according to the specified format or any of the supported formats.
 *
 * @param value - The value to be validated as a date. It can be a Date object or a string.
 * @param options - Optional parameter to specify the date format for validation.
 * @param options.format - The format to validate the date string against. Supported formats are 'ISO8601', 'American', 'European', and 'Asian'.
 * @returns `true` if the value is a valid date according to the specified format or any of the supported formats, otherwise `false`.
 */
export function date(value: any, options?: { format: 'ISO8601' | 'American' | 'European' | 'Asian' }): boolean {
  // Check if value is an instance of Date and valid
  if (value instanceof Date && !isNaN(value.getTime())) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  /**
   * Patterns to validate date formats
   * Requires Z or offset when milliseconds are present, otherwise optional
   * ISO 8601 format
   * American format
   * European format
   * Asian format
   */
  const patterns = {
    /**
     * ISO 8601 format
     * Requires Z or offset when milliseconds are present
     * Optional time component
     * Format: YYYY-MM-DDTHH:MM:SS[.SSS][Z|+HH:MM|-HH:MM]
     */
    ISO8601: /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2})?(\.\d{3}(Z|[+-]\d{2}:\d{2}))?)?$/,

    /**
     * American format
     * Time component is optional
     * Format: MM/DD/YYYY [HH:MM[:SS]]
     */
    American: /^\d{2}\/\d{2}\/\d{4}( \d{2}:\d{2}(:\d{2})?)?$/,

    /** 
     * European format
     * Time component is optional
     * Format: DD/MM/YYYY [HH:MM[:SS]]
     */
    European: /^\d{2}\/\d{2}\/\d{4}( \d{2}:\d{2}(:\d{2})?)?$/,

    /**
     * Asian format
     * Time component is optional
     * Format: YYYY/MM/DD [HH:MM[:SS]]
     */
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
