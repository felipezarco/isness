import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

Deno.test("is.cnpj", () => {
  assertEquals(is.cnpj("06.990.590/0001-23"), true);
  assertEquals(is.cnpj("06990590000123"), true);
  assertEquals(is.cnpj("00000000000000"), false);
  assertEquals(is.cnpj("06.990.590/0001-24"), false);
  assertEquals(is.cnpj("06.990.590/0001-2"), false);
  assertEquals(is.cnpj("06.990.590/0001-234"), false);
  assertEquals(is.cnpj("06.990.590/0001-2a"), false);
  assertEquals(is.cnpj("06.990.590/0001-2-"), false);

  assertEquals(is.cnpj(""), false);
  assertEquals(is.cnpj(null), false);
  assertEquals(is.cnpj(undefined), false);

  assertEquals(is.cnpj(0), false);

  assertEquals(is.cnpj([]), false);
  assertEquals(is.cnpj({}), false);
});
