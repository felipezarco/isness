import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

Deno.test("string", () => {
  assertEquals(is.string(""), true, "Empty string");
  assertEquals(is.string("abc"), true, "String");
  assertEquals(is.string([]), false, "Array");
  assertEquals(is.string({}), false, "Object");
  assertEquals(is.string(true), false, "Boolean");
  assertEquals(is.string(false), false, "Boolean");
  assertEquals(is.string(null), false, "Null");
  assertEquals(is.string(undefined), false, "Undefined");
  assertEquals(is.string(0), false, "Number");
  assertEquals(is.string(1), false, "Number");
  assertEquals(is.string(0n), false, "BigInt");
  assertEquals(is.string(1n), false, "BigInt");
  assertEquals(is.string(() => {}), false, "Function");
  assertEquals(is.string(new Date()), false, "Date");
  assertEquals(is.string(/./), false, "Regex");
  assertEquals(is.string(Symbol()), false, "Symbol");
  assertEquals(is.string(BigInt(1)), false, "BigInt");
});
