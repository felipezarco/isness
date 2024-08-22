import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

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
