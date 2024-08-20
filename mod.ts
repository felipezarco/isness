/**
 * A simple library to check if a value is what you expect it to be.
 *
 * ## Usage
 *
 * ### Install
 *
 * Deno:
 *
 * ```sh
 * deno add @zarco/isness
 * ```
 *
 * Node:
 *
 * ```sh
 * npx jsr add @zarco/isness
 * ```
 *
 * ### Usage
 *
 * ```ts
 * import * as is from "@zarco/isness";
 *
 * if (is.string("hello")) {
 *  // do something
 * }
 * ```
 *
 * ### Methods
 *
 * The tables below show the methods available in the package, divided by category.
 * Each example consists of one or more values that evaluate to true for the
 * method.
 *
 * #### Character
 *
 * The following methods check if a string is composed of a specific set of
 * characters.
 *
 * | Method         | Description                                                         | Example  |
 * | -------------- | ------------------------------------------------------------------- | -------- |
 * | `alphabetic`   | Checks if a string is alphabetic                                    | "abc"    |
 * | `alphanumeric` | Checks if the given string consists only of alphanumeric characters | "abc123" |
 * | `ascii`        | Checks if a string is ascii                                         | "abc123" |
 * | `digit`        | Checks if a string is a digit                                       | "3"      |
 * | `hexadecimal`  | Checks if a string is hexadecimal                                   | "a1b2c3" |
 * | `lowercase`    | Checks if a string is lowercase                                     | "abc"    |
 * | `uppercase`    | Checks if a string is uppercase                                     | "ABC"    |
 * | `whitespace`   | Checks if a string is a whitespace                                  | " "      |
 *
 * #### Type
 *
 * The following methods check if a value is of a specific type.
 *
 * | Method        | Description                       | Example           |
 * | ------------- | --------------------------------- | ----------------- |
 * | `array`       | Checks if a value is an array     | [1, 2, 3]         |
 * | `string`      | Checks if a value is a string     | "hello"           |
 * | `boolean`     | Checks if a value is a boolean    | true              |
 * | `booleanLike` | Checks if a value is boolean-like | true, "true" or 1 |
 * | `number`      | Checks if a value is a number     | 123, "123", 0, 1.3|
 *
 * #### Date
 *
 * The following are the date-related methods.
 *
 * | Method | Description                 | Example                  |
 * | ------ | --------------------------- | ------------------------ |
 * | `date` | Checks if a value is a date | new Date(), "2021-01-01" |
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
