import is from "../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

Deno.test("array", () => {
  assertEquals(is.array([]), true, "Empty array");
  assertEquals(is.array([1, 2, 3]), true, "Array with numbers");
  assertEquals(is.array(["a", "b", "c"]), true, "Array with strings");
  assertEquals(is.array([true, false]), true, "Array with booleans");
  assertEquals(
    is.array([null, undefined]),
    true,
    "Array with null and undefined",
  );
  assertEquals(is.array([{}, {}]), true, "Array with objects");
  assertEquals(is.array([[], []]), true, "Array with arrays");
  assertEquals(is.array([() => {}, () => {}]), true, "Array with functions");
  assertEquals(is.array([new Date(), new Date()]), true, "Array with dates");
  assertEquals(is.array([/./, /./]), true, "Array with regex");
  assertEquals(is.array([Symbol(), Symbol()]), true, "Array with symbols");
  assertEquals(is.array([BigInt(1), BigInt(2)]), true, "Array with bigints");
  assertEquals(
    is.array([
      1,
      "a",
      true,
      null,
      undefined,
      {},
      [],
      () => {},
      new Date(),
      /./,
      Symbol(),
      BigInt(1),
    ]),
    true,
    "Array with mixed values",
  );
  assertEquals(is.array({}), false, "Object");
  assertEquals(is.array(""), false, "Empty string");
  assertEquals(is.array("abc"), false, "String");
  assertEquals(is.array(true), false, "Boolean");
  assertEquals(is.array(false), false, "Boolean");
  assertEquals(is.array(null), false, "Null");
  assertEquals(is.array(undefined), false, "Undefined");
  assertEquals(is.array(0), false, "Number");
  assertEquals(is.array(1), false, "Number");
  assertEquals(is.array(0n), false, "BigInt");
  assertEquals(is.array(1n), false, "BigInt");
  assertEquals(is.array(() => {}), false, "Function");
  assertEquals(is.array(new Date()), false, "Date");
  assertEquals(is.array(/./), false, "Regex");
  assertEquals(is.array(Symbol()), false, "Symbol");
  assertEquals(is.array(BigInt(1)), false, "BigInt");
});

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

Deno.test("booleanLike", () => {
  assertEquals(is.booleanLike(true), true, "Boolean");
  assertEquals(is.booleanLike(false), true, "Boolean");
  assertEquals(is.booleanLike("true"), true, "String");
  assertEquals(is.booleanLike("false"), true, "String");
  assertEquals(is.booleanLike(1), true, "Number");
  assertEquals(is.booleanLike(0), true, "Number");
  assertEquals(is.booleanLike("1"), true, "String");
  assertEquals(is.booleanLike("0"), true, "String");
  assertEquals(is.booleanLike("yes"), false, "String");
  assertEquals(is.booleanLike("n"), false, "String");
  assertEquals(is.booleanLike([]), false, "Array");
  assertEquals(is.booleanLike({}), false, "Object");
  assertEquals(is.booleanLike(""), false, "String");
  assertEquals(is.booleanLike(null), false, "Null");
  assertEquals(is.booleanLike(undefined), false, "Undefined");
  assertEquals(is.booleanLike(0n), false, "BigInt");
  assertEquals(is.booleanLike(1n), false, "BigInt");
  assertEquals(is.booleanLike(() => {}), false, "Function");
  assertEquals(is.booleanLike(new Date()), false, "Date");
  assertEquals(is.booleanLike(/./), false, "Regex");
  assertEquals(is.booleanLike(Symbol()), false, "Symbol");
  assertEquals(is.booleanLike(BigInt(1)), false, "BigInt");
});

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
