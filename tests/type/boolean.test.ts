import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

Deno.test("boolean", () => {
  assertEquals(is.boolean(true), true, "Boolean");
  assertEquals(is.boolean(false), true, "Boolean");
  assertEquals(is.boolean("true"), false, "String");
  assertEquals(is.boolean("false"), false, "String");
  assertEquals(is.boolean([]), false, "Array");
  assertEquals(is.boolean({}), false, "Object");
  assertEquals(is.boolean(""), false, "String");
  assertEquals(is.boolean(null), false, "Null");
  assertEquals(is.boolean(undefined), false, "Undefined");
  assertEquals(is.boolean(0), false, "Number");
  assertEquals(is.boolean(1), false, "Number");
  assertEquals(is.boolean(0n), false, "BigInt");
  assertEquals(is.boolean(1n), false, "BigInt");
  assertEquals(is.boolean(() => {}), false, "Function");
  assertEquals(is.boolean(new Date()), false, "Date");
  assertEquals(is.boolean(/./), false, "Regex");
  assertEquals(is.boolean(Symbol()), false, "Symbol");
  assertEquals(is.boolean(BigInt(1)), false, "BigInt");
});
