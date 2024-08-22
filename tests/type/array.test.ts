import is from "../../mod.ts";
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
