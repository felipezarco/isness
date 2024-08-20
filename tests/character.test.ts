import is from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

Deno.test("alphabetic", () => {
  assertEquals(is.alphabetic("a"), true);
  assertEquals(is.alphabetic("A"), true);
  assertEquals(is.alphabetic("f"), true);
  assertEquals(is.alphabetic("F"), true);
  assertEquals(is.alphabetic("g"), true);
  assertEquals(is.alphabetic("G"), true);
  assertEquals(is.alphabetic("z"), true);
  assertEquals(is.alphabetic("Z"), true);

  assertEquals(is.alphabetic(""), false);
  assertEquals(is.alphabetic(" "), false);
  assertEquals(is.alphabetic("0"), false);
  assertEquals(is.alphabetic("1"), false);
  assertEquals(is.alphabetic("9"), false);
  assertEquals(is.alphabetic("!"), false);
  assertEquals(is.alphabetic("@"), false);
  assertEquals(is.alphabetic("#"), false);
  assertEquals(is.alphabetic("$"), false);
  assertEquals(is.alphabetic("%"), false);
  assertEquals(is.alphabetic("^"), false);
  assertEquals(is.alphabetic("&"), false);
  assertEquals(is.alphabetic("*"), false);
  assertEquals(is.alphabetic("("), false);
  assertEquals(is.alphabetic(")"), false);
  assertEquals(is.alphabetic("-"), false);
  assertEquals(is.alphabetic("_"), false);
  assertEquals(is.alphabetic("+"), false);
  assertEquals(is.alphabetic("="), false);
  assertEquals(is.alphabetic("{"), false);
  assertEquals(is.alphabetic("["), false);
  assertEquals(is.alphabetic("}"), false);
  assertEquals(is.alphabetic("]"), false);
  assertEquals(is.alphabetic("|"), false);
  assertEquals(is.alphabetic("\\"), false);
  assertEquals(is.alphabetic(":"), false);
  assertEquals(is.alphabetic(";"), false);
  assertEquals(is.alphabetic('"'), false);
  assertEquals(is.alphabetic("'"), false);
  assertEquals(is.alphabetic("<"), false);
  assertEquals(is.alphabetic(","), false);
  assertEquals(is.alphabetic(">"), false);
  assertEquals(is.alphabetic("."), false);
  assertEquals(is.alphabetic("?"), false);
  assertEquals(is.alphabetic("/"), false);
  assertEquals(is.alphabetic("`"), false);
  assertEquals(is.alphabetic("~"), false);
});

Deno.test("alphanumeric", () => {
  assertEquals(is.alphanumeric("a"), true);
  assertEquals(is.alphanumeric("A"), true);
  assertEquals(is.alphanumeric("0"), true);
  assertEquals(is.alphanumeric("1"), true);
  assertEquals(is.alphanumeric("9"), true);
  assertEquals(is.alphanumeric("f"), true);
  assertEquals(is.alphanumeric("F"), true);
  assertEquals(is.alphanumeric("g"), true);
  assertEquals(is.alphanumeric("G"), true);
  assertEquals(is.alphanumeric("z"), true);
  assertEquals(is.alphanumeric("Z"), true);

  assertEquals(is.alphanumeric(""), false);
  assertEquals(is.alphanumeric(" "), false);

  assertEquals(is.alphanumeric("!"), false);
  assertEquals(is.alphanumeric("@"), false);
  assertEquals(is.alphanumeric("#"), false);
  assertEquals(is.alphanumeric("$"), false);
  assertEquals(is.alphanumeric("%"), false);
  assertEquals(is.alphanumeric("^"), false);
  assertEquals(is.alphanumeric("&"), false);
  assertEquals(is.alphanumeric("*"), false);
  assertEquals(is.alphanumeric("("), false);
  assertEquals(is.alphanumeric(")"), false);
  assertEquals(is.alphanumeric("-"), false);
  assertEquals(is.alphanumeric("_"), false);
  assertEquals(is.alphanumeric("+"), false);
  assertEquals(is.alphanumeric("="), false);
  assertEquals(is.alphanumeric("{"), false);
  assertEquals(is.alphanumeric("["), false);
  assertEquals(is.alphanumeric("}"), false);
  assertEquals(is.alphanumeric("]"), false);
  assertEquals(is.alphanumeric("|"), false);
  assertEquals(is.alphanumeric("\\"), false);
  assertEquals(is.alphanumeric(":"), false);
  assertEquals(is.alphanumeric(";"), false);
  assertEquals(is.alphanumeric('"'), false);
  assertEquals(is.alphanumeric("'"), false);
  assertEquals(is.alphanumeric("<"), false);
  assertEquals(is.alphanumeric(","), false);
  assertEquals(is.alphanumeric(">"), false);
  assertEquals(is.alphanumeric("."), false);
  assertEquals(is.alphanumeric("?"), false);
  assertEquals(is.alphanumeric("/"), false);
  assertEquals(is.alphanumeric("`"), false);
  assertEquals(is.alphanumeric("~"), false);
});

Deno.test("ascii", () => {
  assertEquals(is.ascii(""), true);
  assertEquals(is.ascii(" "), true);
  assertEquals(is.ascii("a"), true);
  assertEquals(is.ascii("A"), true);
  assertEquals(is.ascii("0"), true);
  assertEquals(is.ascii("1"), true);
  assertEquals(is.ascii("9"), true);
  assertEquals(is.ascii("f"), true);
  assertEquals(is.ascii("F"), true);
  assertEquals(is.ascii("g"), true);
  assertEquals(is.ascii("G"), true);
  assertEquals(is.ascii("z"), true);
  assertEquals(is.ascii("Z"), true);
  assertEquals(is.ascii("!"), true);
  assertEquals(is.ascii("@"), true);
  assertEquals(is.ascii("#"), true);
  assertEquals(is.ascii("$"), true);
  assertEquals(is.ascii("%"), true);
  assertEquals(is.ascii("^"), true);
  assertEquals(is.ascii("&"), true);
  assertEquals(is.ascii("*"), true);
  assertEquals(is.ascii("("), true);
  assertEquals(is.ascii(")"), true);
  assertEquals(is.ascii("-"), true);
  assertEquals(is.ascii("_"), true);
  assertEquals(is.ascii("+"), true);
  assertEquals(is.ascii("="), true);
  assertEquals(is.ascii("{"), true);
  assertEquals(is.ascii("["), true);
  assertEquals(is.ascii("}"), true);
  assertEquals(is.ascii("]"), true);
  assertEquals(is.ascii("|"), true);
  assertEquals(is.ascii("\\"), true);
  assertEquals(is.ascii(":"), true);
  assertEquals(is.ascii(";"), true);
  assertEquals(is.ascii('"'), true);
  assertEquals(is.ascii("'"), true);
  assertEquals(is.ascii("<"), true);
  assertEquals(is.ascii(","), true);
  assertEquals(is.ascii(">"), true);
  assertEquals(is.ascii("."), true);
  assertEquals(is.ascii("?"), true);
  assertEquals(is.ascii("/"), true);
  assertEquals(is.ascii("`"), true);
  assertEquals(is.ascii("~"), true);
});

Deno.test("digit", () => {
  assertEquals(is.digit("0"), true);
  assertEquals(is.digit("1"), true);
  assertEquals(is.digit("9"), true);
  assertEquals(is.digit(0), true);
  assertEquals(is.digit(1), true);
  assertEquals(is.digit(9), true);
  assertEquals(is.digit(-1), false);
  assertEquals(is.digit("00"), false);
  assertEquals(is.digit("1337"), false);
  assertEquals(is.digit(""), false);
  assertEquals(is.digit(" "), false);
  assertEquals(is.digit("a"), false);
  assertEquals(is.digit("A"), false);
  assertEquals(is.digit("!"), false);
  assertEquals(is.digit("@"), false);
  assertEquals(is.digit("#"), false);
  assertEquals(is.digit("$"), false);
  assertEquals(is.digit("%"), false);
  assertEquals(is.digit("^"), false);
  assertEquals(is.digit("&"), false);
  assertEquals(is.digit("*"), false);
  assertEquals(is.digit("("), false);
  assertEquals(is.digit(")"), false);
  assertEquals(is.digit("-"), false);
  assertEquals(is.digit("_"), false);
  assertEquals(is.digit("+"), false);
  assertEquals(is.digit("="), false);
  assertEquals(is.digit("{"), false);
  assertEquals(is.digit("["), false);
  assertEquals(is.digit("}"), false);
  assertEquals(is.digit("]"), false);
  assertEquals(is.digit("|"), false);
  assertEquals(is.digit("\\"), false);
  assertEquals(is.digit(":"), false);
  assertEquals(is.digit(";"), false);
  assertEquals(is.digit('"'), false);
  assertEquals(is.digit("'"), false);
  assertEquals(is.digit("<"), false);
  assertEquals(is.digit(","), false);
  assertEquals(is.digit(">"), false);
  assertEquals(is.digit("."), false);
  assertEquals(is.digit("?"), false);
  assertEquals(is.digit("/"), false);
  assertEquals(is.digit("`"), false);
  assertEquals(is.digit("~"), false);

  assertEquals(is.digit(null), false);
  assertEquals(is.digit(undefined), false);
  assertEquals(is.digit(true), false);
  assertEquals(is.digit(false), false);

  assertEquals(is.digit([]), false);
  assertEquals(is.digit({}), false);
  assertEquals(is.digit(() => {}), false);
  assertEquals(is.digit(new Date()), false);
  assertEquals(is.digit(/./), false);
  assertEquals(is.digit(Symbol()), false);
  assertEquals(is.digit(BigInt(1)), false);
});

Deno.test("hexadecimal", () => {
  // Valid hexadecimal cases
  assertEquals(is.hexadecimal("0123456789abcdef"), true); // All lowercase hexadecimal digits
  assertEquals(is.hexadecimal("0123456789ABCDEF"), true); // All uppercase hexadecimal digits
  assertEquals(is.hexadecimal("a1b2c3d4e5f6"), true); // Combination of lowercase hexadecimal digits
  assertEquals(is.hexadecimal("A1B2C3D4E5F6"), true); // Combination of uppercase hexadecimal digits
  assertEquals(is.hexadecimal("0"), true); // Single hexadecimal digit

  // Invalid hexadecimal cases
  assertEquals(is.hexadecimal(""), false); // Empty string
  assertEquals(is.hexadecimal("g"), false); // Non-hexadecimal character
  assertEquals(is.hexadecimal("0123456789abcdefg"), false); // Non-hexadecimal character
  assertEquals(is.hexadecimal("hijklmnopqrstuvwxyz"), false); // Non-hexadecimal letters
  assertEquals(is.hexadecimal("ABCDEFGHJKLMNOPQRSTUVWXYZ"), false); // Non-hexadecimal letters
  assertEquals(is.hexadecimal("!@#$%^&*()"), false); // Special characters
  assertEquals(is.hexadecimal("0123456789abcdef!@#$%^&*()"), false); // Combination of invalid characters

  // Other data types
  assertEquals(is.hexadecimal(null), false); // Null value
  assertEquals(is.hexadecimal(undefined), false); // Undefined value
  assertEquals(is.hexadecimal(true), false); // Boolean
  assertEquals(is.hexadecimal(false), false); // Boolean
  assertEquals(is.hexadecimal([]), false); // Array
  assertEquals(is.hexadecimal({}), false); // Object
  assertEquals(is.hexadecimal(() => {}), false); // Function
  assertEquals(is.hexadecimal(new Date()), false); // Date
  assertEquals(is.hexadecimal(/./), false); // Regex
  assertEquals(is.hexadecimal(Symbol()), false); // Symbol
  assertEquals(is.hexadecimal(BigInt(1)), false); // BigInt
});

Deno.test("lowercase", () => {
  // Valid lowercase cases
  assertEquals(is.lowercase("a"), true);
  assertEquals(is.lowercase("b"), true);
  assertEquals(is.lowercase("z"), true);
  assertEquals(is.lowercase("hello"), true);
  assertEquals(is.lowercase("world"), true);

  // Invalid lowercase cases
  assertEquals(is.lowercase("A"), false); // Uppercase letter
  assertEquals(is.lowercase("B"), false); // Uppercase letter
  assertEquals(is.lowercase("Z"), false); // Uppercase letter
  assertEquals(is.lowercase("Hello"), false); // Uppercase letter
  assertEquals(is.lowercase("WORLD"), false); // Uppercase letter
  assertEquals(is.lowercase("123"), false); // Numbers
  assertEquals(is.lowercase("@"), false); // Special character
  assertEquals(is.lowercase(" "), false); // Whitespace
  assertEquals(is.lowercase(""), false); // Empty string

  // Other data types
  assertEquals(is.lowercase(null), false); // Null value
  assertEquals(is.lowercase(undefined), false); // Undefined value
  assertEquals(is.lowercase(true), false); // Boolean
  assertEquals(is.lowercase(false), false); // Boolean
  assertEquals(is.lowercase([]), false); // Array
  assertEquals(is.lowercase({}), false); // Object
  assertEquals(is.lowercase(() => {}), false); // Function
  assertEquals(is.lowercase(new Date()), false); // Date
  assertEquals(is.lowercase(/./), false); // Regex
  assertEquals(is.lowercase(Symbol()), false); // Symbol
  assertEquals(is.lowercase(BigInt(1)), false); // BigInt
});

Deno.test("uppercase", () => {
  // Valid uppercase cases
  assertEquals(is.uppercase("A"), true);
  assertEquals(is.uppercase("B"), true);
  assertEquals(is.uppercase("Z"), true);
  assertEquals(is.uppercase("HELLO"), true);
  assertEquals(is.uppercase("WORLD"), true);

  // Invalid uppercase cases
  assertEquals(is.uppercase("a"), false); // Lowercase letter
  assertEquals(is.uppercase("b"), false); // Lowercase letter
  assertEquals(is.uppercase("z"), false); // Lowercase letter
  assertEquals(is.uppercase("Hello"), false); // Lowercase letter
  assertEquals(is.uppercase("world"), false); // Lowercase letter
  assertEquals(is.uppercase("123"), false); // Numbers
  assertEquals(is.uppercase("@"), false); // Special character
  assertEquals(is.uppercase(" "), false); // Whitespace
  assertEquals(is.uppercase(""), false); // Empty string

  // Other data types
  assertEquals(is.uppercase(null), false); // Null value
  assertEquals(is.uppercase(undefined), false); // Undefined value
  assertEquals(is.uppercase(true), false); // Boolean
  assertEquals(is.uppercase(false), false); // Boolean
  assertEquals(is.uppercase([]), false); // Array
  assertEquals(is.uppercase({}), false); // Object
  assertEquals(is.uppercase(() => {}), false); // Function
  assertEquals(is.uppercase(new Date()), false); // Date
  assertEquals(is.uppercase(/./), false); // Regex
  assertEquals(is.uppercase(Symbol()), false); // Symbol
  assertEquals(is.uppercase(BigInt(1)), false); // BigInt
});

Deno.test("whitespace", () => {
  assertEquals(is.whitespace(" "), true);
  assertEquals(is.whitespace("\t"), true);
  assertEquals(is.whitespace("\n"), true);
  assertEquals(is.whitespace("\r"), true);
  assertEquals(is.whitespace("\v"), true);
  assertEquals(is.whitespace("\f"), true);
  assertEquals(is.whitespace(" \t\n\r\v\f"), true);

  assertEquals(is.whitespace(""), false);
  assertEquals(is.whitespace("a"), false);
  assertEquals(is.whitespace("1"), false);
  assertEquals(is.whitespace("!"), false);
  assertEquals(is.whitespace("@"), false);
  assertEquals(is.whitespace("#"), false);
  assertEquals(is.whitespace("$"), false);
  assertEquals(is.whitespace("%"), false);
  assertEquals(is.whitespace("^"), false);
  assertEquals(is.whitespace("&"), false);
  assertEquals(is.whitespace("*"), false);

  assertEquals(is.whitespace(" abc"), false);
  assertEquals(is.whitespace("abc "), false);
  assertEquals(is.whitespace(null), false);
  assertEquals(is.whitespace(undefined), false);
  assertEquals(is.whitespace(true), false);
  assertEquals(is.whitespace(false), false);
  assertEquals(is.whitespace([]), false);
  assertEquals(is.whitespace({}), false);
  assertEquals(is.whitespace(() => {}), false);
  assertEquals(is.whitespace(new Date()), false);
  assertEquals(is.whitespace(/./), false);
  assertEquals(is.whitespace(Symbol()), false);
  assertEquals(is.whitespace(BigInt(1)), false);
});
