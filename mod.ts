/**
 * A simple library to check if a value is what you expect it to be.
 * @module
 */

import { alphabetic } from './character.ts'
import { alphanumeric } from './character.ts'
import { ascii } from './character.ts'
import { digit } from './character.ts'
import { hexadecimal } from './character.ts'
import { lowercase } from './character.ts'
import { uppercase } from './character.ts'
import { whitespace } from './character.ts'

import { date } from './date.ts'

import { array } from './type.ts'
import { string } from './type.ts'
import { boolean } from './type.ts'
import { booleanLike } from './type.ts'

/**
 * The `is` object aggregates various modules that provide utility functions for different types of checks.
 */
const is = {
  alphabetic,
  alphanumeric,
  ascii,
  digit,
  hexadecimal,
  lowercase,
  uppercase,
  whitespace,
  date,
  array, 
  string,
  boolean,
  booleanLike
}

/**
 * Export as default
 * @description A collection of functions to check the type of a value.
 */
export default is

/**
 * Export as named functions
 * @description Each function is exported separately 
 */
export {
  alphabetic,
  alphanumeric,
  ascii,
  digit,
  hexadecimal,
  lowercase,
  uppercase,
  whitespace,
  date,
  array,
  string,
  boolean,
  booleanLike
}
