import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

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
