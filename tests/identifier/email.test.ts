import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

Deno.test("email", () => {
  assertEquals(is.email("felipezarco@hotmail.com"), true);

  assertEquals(is.email(""), false);
  assertEquals(is.email(" "), false);
  assertEquals(is.email("a"), false);

  assertEquals(is.email(undefined), false);
  assertEquals(is.email(null), false);
  assertEquals(is.email(true), false);
  assertEquals(is.email(false), false);
  assertEquals(is.email([]), false);
  assertEquals(is.email({}), false);
  assertEquals(is.email(() => {}), false);
  assertEquals(is.email(new Date()), false);
  assertEquals(is.email(/./), false);
  assertEquals(is.email(Symbol()), false);
  assertEquals(is.email(BigInt(1)), false);
});
