
import * as character from './character.ts'
import * as date from './date.ts'
import * as type from './type.ts'

/**
 * module is
 * @description A collection of functions to check the type of a value.
 * @example
 * import is from '@zarco/isness'
 * console.log(is.array([])) // true
 */
const is = {
  ...character,
  ...date,
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
  character,
  date,
  type
}
