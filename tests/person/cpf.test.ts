import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

Deno.test('is.cpf', () => {
  assertEquals(is.cpf('111.329.380-23'), true);
  assertEquals(is.cpf('02263946039'), true);
  assertEquals(is.cpf('212.614.330-92 '), true);
  assertEquals(is.cpf('   76461913025 '), true);

  assertEquals(is.cpf('000.000.000-00'), false);
  assertEquals(is.cpf('000.000.000-00'), false);
  assertEquals(is.cpf('111.111.111-11'), false);
  assertEquals(is.cpf('222.222.222-22'), false);
  assertEquals(is.cpf('333.333.333-33'), false);
  assertEquals(is.cpf('444.444.444-44'), false);
  assertEquals(is.cpf('555.555.555-55'), false);
  assertEquals(is.cpf('666.666.666-66'), false);
  assertEquals(is.cpf('777.777.777-77'), false);
  assertEquals(is.cpf('888.888.888-88'), false);
  assertEquals(is.cpf('999.999.999-99'), false);
  assertEquals(is.cpf('111.329.380-24'), false);
  assertEquals(is.cpf('111.329.380-2'), false);

  assertEquals(is.cpf(''), false);
  assertEquals(is.cpf(null), false);
  assertEquals(is.cpf(undefined), false);
})