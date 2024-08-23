import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

Deno.test("fullName", () => {
  assertEquals(
    is.fullName("John Doe"),
    true,
    "Name with simple first and last name",
  );
  assertEquals(
    is.fullName("John Doe-Smith"),
    true,
    "Name with first name and hyphenated last name",
  );
  assertEquals(
    is.fullName("John Doe-Smith'"),
    true,
    "Name with first name, hyphenated last name, and apostrophe",
  );

  // test other language
  assertEquals(is.fullName("Jöhn Döe"), true, "Name with umlaut and space");
  assertEquals(
    is.fullName("Jöhn Döe-Smith"),
    true,
    "Name with umlaut and hyphen",
  );

  // test different characters like Chinese, Russian, Japanese
  assertEquals(is.fullName("你好 世界"), true, "Name with Chinese characters");
  assertEquals(is.fullName("Привет Мир"), true, "Name with Russian characters");
  assertEquals(
    is.fullName("こんにちは 世界"),
    true,
    "Name with Japanese characters",
  );

  assertEquals(is.fullName("John Doe "), true, "Name with space at the end");
  assertEquals(
    is.fullName("John Doe-Smith "),
    true,
    "Name with hyphenated last name and space at the end",
  );

  // not full name examples
  assertEquals(is.fullName("John"), false, "Single name");
  assertEquals(is.fullName("John "), false, "Single name with space");

  assertEquals(is.fullName(""), false, "Empty string");
  assertEquals(is.fullName(" "), false, "Space");
  assertEquals(is.fullName(null), false, "null");
  assertEquals(is.fullName(undefined), false, "undefined");
  assertEquals(is.fullName(123), false, "Number");
  assertEquals(is.fullName({}), false, "Object");
  assertEquals(is.fullName([]), false, "Array");
  assertEquals(is.fullName(true), false, "Boolean");
  assertEquals(is.fullName(false), false, "Boolean");
  assertEquals(is.fullName(() => {}), false, "Function");
});
