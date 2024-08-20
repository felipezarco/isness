/**
 * `isness`
 *
 * A simple library to check if a value is what you expect it to be.
 *
 * ### Methods
 *
 * #### Character
 *
 * Check if a string is composed of a specific set of characters.
 *
 * #### Type
 *
 * Methods that check if a value is of a specific type.
 *
 * #### Date
 *
 * Date-related methods.
 */

import { alphabetic } from "./character.ts";
import { alphanumeric } from "./character.ts";
import { ascii } from "./character.ts";
import { digit } from "./character.ts";
import { hexadecimal } from "./character.ts";
import { lowercase } from "./character.ts";
import { uppercase } from "./character.ts";
import { whitespace } from "./character.ts";

import { date } from "./date.ts";

import { array } from "./type.ts";
import { string } from "./type.ts";
import { boolean } from "./type.ts";
import { booleanLike } from "./type.ts";
import { number } from "./type.ts";

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
  booleanLike,
  number,
};

/**
 * Export as default
 * @description A collection of functions to check the type of a value.
 */
export default is;

/**
 * Export as named functions
 * @description Each function is exported separately
 */
export {
  alphabetic,
  alphanumeric,
  array,
  ascii,
  boolean,
  booleanLike,
  date,
  digit,
  hexadecimal,
  lowercase,
  number,
  string,
  uppercase,
  whitespace,
};
