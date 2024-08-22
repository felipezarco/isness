import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

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
