import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

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
