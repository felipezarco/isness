import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

Deno.test("number", () => {
  assertEquals(is.number(123), true, "Number");
  assertEquals(is.number("123"), true, "String");
  assertEquals(is.number("4.3"), true, "String");
  assertEquals(is.number(0), true, "Number");
  assertEquals(is.number(1.3), true, "Number");
  assertEquals(is.number(BigInt(1)), true, "BigInt");
  assertEquals(is.number(0n), true, "BigInt");
  assertEquals(is.number(1n), true, "BigInt");
  assertEquals(is.number(2.5e-7), true, "Number");
  assertEquals(is.number(0x16), true, "Number");
  assertEquals(is.number(0b11), true, "Number");
  assertEquals(is.number(0o7), true, "Number");
  assertEquals(is.number(Infinity), true, "Number");
  assertEquals(is.number(-Infinity), true, "Number");
  assertEquals(is.number(-0), true, "Number");
  assertEquals(is.number(1 / 0), true, "Number");
  assertEquals(is.number(-1 / 0), true, "Number");
  assertEquals(is.number(Number.MAX_VALUE), true, "Number");
  assertEquals(is.number(Number.MIN_VALUE), true, "Number");
  assertEquals(is.number(Number.EPSILON), true, "Number");
  assertEquals(is.number(Number.POSITIVE_INFINITY), true, "Number");
  assertEquals(is.number(Number.NEGATIVE_INFINITY), true, "Number");
  assertEquals(is.number(Number.MAX_SAFE_INTEGER), true, "Number");
  assertEquals(is.number(Number.MIN_SAFE_INTEGER), true, "Number");
  assertEquals(is.number(Number.MIN_SAFE_INTEGER - 1), true, "Number");
  assertEquals(is.number(Number.MAX_SAFE_INTEGER + 1), true, "Number");
  assertEquals(is.number("  123 "), true, "String");
  assertEquals(is.number("  1 23 "), false, "String");
  assertEquals(is.number([]), false, "Array");
  assertEquals(is.number({}), false, "Object");
  assertEquals(is.number(""), false, "String");
  assertEquals(is.number(true), false, "Boolean");
  assertEquals(is.number(false), false, "Boolean");
  assertEquals(is.number(null), false, "Null");
  assertEquals(is.number(undefined), false, "Undefined");
  assertEquals(is.number(() => {}), false, "Function");
  assertEquals(is.number(new Date()), false, "Date");
  assertEquals(is.number(/3/), false, "Regex");
  assertEquals(is.number(Symbol()), false, "Symbol");
  assertEquals(is.number(NaN), false, "Number");
  assertEquals(is.number(0 / 0), false, "Number");
  assertEquals(is.number(Number.NaN), false, "Number");
});