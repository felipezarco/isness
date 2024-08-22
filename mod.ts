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
 */

import { alphabetic } from "./lib/character/alphabetic.ts";
import { alphanumeric } from "./lib/character/alphanumeric.ts";
import { ascii } from "./lib/character/ascii.ts";
import { digit } from "./lib/character/digit.ts";
import { hexadecimal } from "./lib/character/hexadecimal.ts";
import { lowercase } from "./lib/character/lowercase.ts";
import { uppercase } from "./lib/character/uppercase.ts";
import { whitespace } from "./lib/character/whitespace.ts";

import { date } from "./lib/temporal/date.ts";

import { array } from "./lib/type/array.ts";
import { string } from "./lib/type/string.ts";
import { boolean } from "./lib/type/boolean.ts";
import { booleanLike } from "./lib/type/booleanLike.ts";
import { number } from "./lib/type/number.ts";
import { objectId } from "./lib/type/objectId.ts";

import { domain } from "./lib/identifier/domain.ts";
import { email } from "./lib/identifier/email.ts";
import { url } from "./lib/identifier/url.ts";

export default {
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
  hexadecimal,
  lowercase,
  number,
  objectId,
  string,
  uppercase,
  url,
  whitespace,
};