import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

Deno.test("name", () => {
  assertEquals(is.name("John"), true, "Name with simple first name");
  assertEquals(is.name("John Doe"), true, "Name with first and last name");
  assertEquals(is.name("John-Doe"), true, "Name with hyphenated last name");
  assertEquals(is.name("John'Doe"), true, "Name with apostrophe");
  assertEquals(
    is.name("John Doe-Smith"),
    true,
    "Name with hyphenated last name and space",
  );
  assertEquals(
    is.name("John Doe-Smith'"),
    true,
    "Name with hyphenated last name, space, and apostrophe",
  );

  // test other language
  assertEquals(is.name("Jöhn"), true, "Name with umlaut");
  assertEquals(is.name("Jöhn Döe"), true, "Name with umlaut and space");
  assertEquals(is.name("Jöhn-Döe"), true, "Name with umlaut and hyphen");

  // test different characters like Chinese, Russian, Japanese
  assertEquals(is.name("你好"), true, "Name with Chinese characters");
  assertEquals(is.name("Привет"), true, "Name with Russian characters");
  assertEquals(is.name("こんにちは"), true, "Name with Japanese characters");
});
