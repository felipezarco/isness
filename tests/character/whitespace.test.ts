import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

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
