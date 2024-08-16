import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";
import is from "../mod.ts";

Deno.test('Valid date object', () => {
  // Validação de objetos Date válidos
  assertEquals(is.date(new Date()), true, 'Valid date object');
  assertEquals(is.date(new Date('2020-12-31')), true, 'Valid date object with string');
  assertEquals(is.date(new Date('2020-12-31T00:00:00.000Z')), true, 'Valid date object with string and milliseconds');
});

Deno.test('ISO 8601 format', () => {
  // Validação de strings válidas no formato ISO 8601
  assertEquals(is.date('2020-12-31'), true, 'Valid ISO 8601 date');
  assertEquals(is.date('2020-12-31T00:00'), true, 'Valid ISO 8601 with time');
  assertEquals(is.date('2020-12-31T00:00:00'), true, 'Valid ISO 8601 with seconds');
  assertEquals(is.date('2020-12-31T00:00:00.000'), false, 'Invalid ISO 8601 without Z/offset and milliseconds');
  assertEquals(is.date('2020-12-31T00:00:00.000Z'), true, 'Valid ISO 8601 with milliseconds and Z');
  assertEquals(is.date('2020-12-31T00:00:00.000+00:00'), true, 'Valid ISO 8601 with milliseconds and offset');
});

Deno.test('American format', () => {
  // Validação de strings válidas no formato Americano
  assertEquals(is.date('12/31/2020'), true, 'Valid American date');
  assertEquals(is.date('12/31/2020 00:00'), true, 'Valid American date with time');
  assertEquals(is.date('12/31/2020 00:00:00'), true, 'Valid American date with seconds');
  
  // Validação de strings inválidas no formato Americano
  assertEquals(is.date('12/31/2020 00:00:00.000'), false, 'Invalid American date with milliseconds');
  assertEquals(is.date('12/31/2020 00:00:00Z'), false, 'Invalid American date with Z');
  assertEquals(is.date('12/31/2020 00:00:00.000+00:00'), false, 'Invalid American date with milliseconds and offset');
});

Deno.test('European format', () => {
  // Validação de strings válidas no formato Europeu
  assertEquals(is.date('31/12/2020'), true, 'Valid European date');
  assertEquals(is.date('31/12/2020 00:00'), true, 'Valid European date with time');
  assertEquals(is.date('31/12/2020 00:00:00'), true, 'Valid European date with seconds');
  
  // Validação de strings inválidas no formato Europeu
  assertEquals(is.date('31/12/2020 00:00:00.000'), false, 'Invalid European date with milliseconds');
  assertEquals(is.date('31/12/2020 00:00:00Z'), false, 'Invalid European date with Z');
  assertEquals(is.date('31/12/2020 00:00:00.000+00:00'), false, 'Invalid European date with milliseconds and offset');
});

Deno.test('Asian format', () => {
  // Validação de strings válidas no formato Asiático
  assertEquals(is.date('2020/12/31'), true, 'Valid Asian date');
  assertEquals(is.date('2020/12/31 00:00'), true, 'Valid Asian date with time');
  assertEquals(is.date('2020/12/31 00:00:00'), true, 'Valid Asian date with seconds');
  
  // Validação de strings inválidas no formato Asiático
  assertEquals(is.date('2020/12/31 00:00:00.000'), false, 'Invalid Asian date with milliseconds');
  assertEquals(is.date('2020/12/31 00:00:00Z'), false, 'Invalid Asian date with Z');
  assertEquals(is.date('2020/12/31 00:00:00.000+00:00'), false, 'Invalid Asian date with milliseconds and offset');
});
