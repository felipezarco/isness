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
 * #### Temporal
 *
 * Date/time related methods.
 *
 * #### Identifiers
 *
 * URL, domain, email and other unique identifiers.
 *
 * #### Person
 *
 * Personal data value checks or similar.
 */

import alphabetic from "./lib/character/alphabetic.ts";
import alphanumeric from "./lib/character/alphanumeric.ts";
import ascii from "./lib/character/ascii.ts";
import digit from "./lib/character/digit.ts";
import hexadecimal from "./lib/character/hexadecimal.ts";
import lowercase from "./lib/character/lowercase.ts";
import uppercase from "./lib/character/uppercase.ts";
import whitespace from "./lib/character/whitespace.ts";

import date from "./lib/temporal/date.ts";

import array from "./lib/type/array.ts";
import string from "./lib/type/string.ts";
import boolean from "./lib/type/boolean.ts";
import booleanLike from "./lib/type/booleanLike.ts";
import number from "./lib/type/number.ts";
import objectId from "./lib/type/objectId.ts";

import domain from "./lib/identifier/domain.ts";
import email from "./lib/identifier/email.ts";
import url from "./lib/identifier/url.ts";

import name from "./lib/person/name.ts";
import fullName from "./lib/person/fullName.ts";

/**
 * The `is` object aggregates various modules that provide utility functions for different types of checks.
 */
const is = {
  /** Character checks */
  alphabetic,
  alphanumeric,
  ascii,
  digit,
  hexadecimal,
  lowercase,
  uppercase,
  whitespace,
  /** Temporal checks */
  date,
  /** Type checks */
  array,
  boolean,
  booleanLike,
  number,
  objectId,
  string,
  /** Identifier checks */
  domain,
  email,
  url,
  /** Person */
  fullName,
  name,
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
  /** Character checks */
  alphabetic,
  alphanumeric,
  /** Type checks */
  array,
  ascii,
  boolean,
  booleanLike,
  /** Temporal checks */
  date,
  digit,
  /** Identifier checks */
  domain,
  email,
  /** Person */
  fullName,
  hexadecimal,
  lowercase,
  name,
  number,
  objectId,
  string,
  uppercase,
  url,
  whitespace,
};
