import * as character from './character.ts'
import * as date from './date.ts'
import * as type from './type.ts'

/**
 * The `is` object aggregates various modules that provide utility functions for different types of checks.
 * 
 * @property {Object} character - Module that includes checks that may evaluate true for a single character.
 * @property {Object} date - Module that includes checks related to dates.
 * @property {Object} type - Module that includes checks of data types.
 */
const is = {
  /**
   * character module will include checks that may availate true to a single character
   */
  ...character,
  /**
   * date module will include checks that are related to dates
   */
  ...date,
  /**
   * type module will include checks of data types
   */
  ...type
}

/**
 * Export as default
 * @description A collection of functions to check the type of a value.
 */
export default is

/**
 * Export as named functions
 * @description A collection of functions to check the type of a value.
 * @example
 * import { character, date, type } from '@zarco/isness'
 * console.log(character.letter('a')) // true
 * console.log(date.date(new Date())) // true
 * console.log(type.array([])) // true
 */
export {
  /**
   * character module will include checks that may availate true to a single character
   */
  character,
  /**
   * date module will include checks that are related to dates
   */
  date,
  /**
   * type module will include checks of data types
   */
  type
}
