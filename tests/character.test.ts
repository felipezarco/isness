import is from "../mod.ts"
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts"

Deno.test('alphabetic', () => {
  assertEquals(is.alphabetic('a'), true)
  assertEquals(is.alphabetic('A'), true)
  assertEquals(is.alphabetic('f'), true)
  assertEquals(is.alphabetic('F'), true)
  assertEquals(is.alphabetic('g'), true)
  assertEquals(is.alphabetic('G'), true)
  assertEquals(is.alphabetic('z'), true)
  assertEquals(is.alphabetic('Z'), true)

  assertEquals(is.alphabetic(''), false)
  assertEquals(is.alphabetic(' '), false)
  assertEquals(is.alphabetic('0'), false)
  assertEquals(is.alphabetic('1'), false)
  assertEquals(is.alphabetic('9'), false)
  assertEquals(is.alphabetic('!'), false)
  assertEquals(is.alphabetic('@'), false)
  assertEquals(is.alphabetic('#'), false)
  assertEquals(is.alphabetic('$'), false)
  assertEquals(is.alphabetic('%'), false)
  assertEquals(is.alphabetic('^'), false)
  assertEquals(is.alphabetic('&'), false)
  assertEquals(is.alphabetic('*'), false)
  assertEquals(is.alphabetic('('), false)
  assertEquals(is.alphabetic(')'), false)
  assertEquals(is.alphabetic('-'), false)
  assertEquals(is.alphabetic('_'), false)
  assertEquals(is.alphabetic('+'), false)
  assertEquals(is.alphabetic('='), false)
  assertEquals(is.alphabetic('{'), false)
  assertEquals(is.alphabetic('['), false)
  assertEquals(is.alphabetic('}'), false)
  assertEquals(is.alphabetic(']'), false)
  assertEquals(is.alphabetic('|'), false)
  assertEquals(is.alphabetic('\\'), false)
  assertEquals(is.alphabetic(':'), false)
  assertEquals(is.alphabetic(';'), false)
  assertEquals(is.alphabetic('"'), false)
  assertEquals(is.alphabetic('\''), false)
  assertEquals(is.alphabetic('<'), false)
  assertEquals(is.alphabetic(','), false)
  assertEquals(is.alphabetic('>'), false)
  assertEquals(is.alphabetic('.'), false)
  assertEquals(is.alphabetic('?'), false)
  assertEquals(is.alphabetic('/'), false)
  assertEquals(is.alphabetic('`'), false)
  assertEquals(is.alphabetic('~'), false)
})

Deno.test('alphanumeric', () => {

  assertEquals(is.alphanumeric('a'), true)
  assertEquals(is.alphanumeric('A'), true)
  assertEquals(is.alphanumeric('0'), true)
  assertEquals(is.alphanumeric('1'), true)
  assertEquals(is.alphanumeric('9'), true)
  assertEquals(is.alphanumeric('f'), true)
  assertEquals(is.alphanumeric('F'), true)
  assertEquals(is.alphanumeric('g'), true)
  assertEquals(is.alphanumeric('G'), true)
  assertEquals(is.alphanumeric('z'), true)
  assertEquals(is.alphanumeric('Z'), true)

  assertEquals(is.alphanumeric(''), false)
  assertEquals(is.alphanumeric(' '), false)

  assertEquals(is.alphanumeric('!'), false)
  assertEquals(is.alphanumeric('@'), false)
  assertEquals(is.alphanumeric('#'), false)
  assertEquals(is.alphanumeric('$'), false)
  assertEquals(is.alphanumeric('%'), false)
  assertEquals(is.alphanumeric('^'), false)
  assertEquals(is.alphanumeric('&'), false)
  assertEquals(is.alphanumeric('*'), false)
  assertEquals(is.alphanumeric('('), false)
  assertEquals(is.alphanumeric(')'), false)
  assertEquals(is.alphanumeric('-'), false)
  assertEquals(is.alphanumeric('_'), false)
  assertEquals(is.alphanumeric('+'), false)
  assertEquals(is.alphanumeric('='), false)
  assertEquals(is.alphanumeric('{'), false)
  assertEquals(is.alphanumeric('['), false)
  assertEquals(is.alphanumeric('}'), false)
  assertEquals(is.alphanumeric(']'), false)
  assertEquals(is.alphanumeric('|'), false)
  assertEquals(is.alphanumeric('\\'), false)
  assertEquals(is.alphanumeric(':'), false)
  assertEquals(is.alphanumeric(';'), false)
  assertEquals(is.alphanumeric('"'), false)
  assertEquals(is.alphanumeric('\''), false)
  assertEquals(is.alphanumeric('<'), false)
  assertEquals(is.alphanumeric(','), false)
  assertEquals(is.alphanumeric('>'), false)
  assertEquals(is.alphanumeric('.'), false)
  assertEquals(is.alphanumeric('?'), false)
  assertEquals(is.alphanumeric('/'), false)
  assertEquals(is.alphanumeric('`'), false)
  assertEquals(is.alphanumeric('~'), false)
})

Deno.test('ascii', () => {
  assertEquals(is.ascii(''), false)
  assertEquals(is.ascii(' '), true)
  assertEquals(is.ascii('a'), true)
  assertEquals(is.ascii('A'), true)
  assertEquals(is.ascii('0'), true)
  assertEquals(is.ascii('1'), true)
  assertEquals(is.ascii('9'), true)
  assertEquals(is.ascii('f'), true)
  assertEquals(is.ascii('F'), true)
  assertEquals(is.ascii('g'), true)
  assertEquals(is.ascii('G'), true)
  assertEquals(is.ascii('z'), true)
  assertEquals(is.ascii('Z'), true)
  assertEquals(is.ascii('!'), true)
  assertEquals(is.ascii('@'), true)
  assertEquals(is.ascii('#'), true)
  assertEquals(is.ascii('$'), true)
  assertEquals(is.ascii('%'), true)
  assertEquals(is.ascii('^'), true)
  assertEquals(is.ascii('&'), true)
  assertEquals(is.ascii('*'), true)
  assertEquals(is.ascii('('), true)
  assertEquals(is.ascii(')'), true)
  assertEquals(is.ascii('-'), true)
  assertEquals(is.ascii('_'), true)
  assertEquals(is.ascii('+'), true)
  assertEquals(is.ascii('='), true)
  assertEquals(is.ascii('{'), true)
  assertEquals(is.ascii('['), true)
  assertEquals(is.ascii('}'), true)
  assertEquals(is.ascii(']'), true)
  assertEquals(is.ascii('|'), true)
  assertEquals(is.ascii('\\'), true)
  assertEquals(is.ascii(':'), true)
  assertEquals(is.ascii(';'), true)
  assertEquals(is.ascii('"'), true)
  assertEquals(is.ascii('\''), true)
  assertEquals(is.ascii('<'), true)
  assertEquals(is.ascii(','), true)
  assertEquals(is.ascii('>'), true)
  assertEquals(is.ascii('.'), true)
  assertEquals(is.ascii('?'), true)
  assertEquals(is.ascii('/'), true)
  assertEquals(is.ascii('`'), true)
  assertEquals(is.ascii('~'), true)
})

Deno.test('digit', () => {
  assertEquals(is.digit('0'), true)
  assertEquals(is.digit('1'), true)
  assertEquals(is.digit('9'), true)
  
  assertEquals(is.digit('1337'), false)
  assertEquals(is.digit(''), false)
  assertEquals(is.digit(' '), false)
  assertEquals(is.digit('a'), false)
  assertEquals(is.digit('A'), false)
  assertEquals(is.digit('!'), false)
  assertEquals(is.digit('@'), false)
  assertEquals(is.digit('#'), false)
  assertEquals(is.digit('$'), false)
  assertEquals(is.digit('%'), false)
  assertEquals(is.digit('^'), false)
  assertEquals(is.digit('&'), false)
  assertEquals(is.digit('*'), false)
  assertEquals(is.digit('('), false)
  assertEquals(is.digit(')'), false)
  assertEquals(is.digit('-'), false)
  assertEquals(is.digit('_'), false)
  assertEquals(is.digit('+'), false)
  assertEquals(is.digit('='), false)
  assertEquals(is.digit('{'), false)
  assertEquals(is.digit('['), false)
  assertEquals(is.digit('}'), false)
  assertEquals(is.digit(']'), false)
  assertEquals(is.digit('|'), false)
  assertEquals(is.digit('\\'), false)
  assertEquals(is.digit(':'), false)
  assertEquals(is.digit(';'), false)
  assertEquals(is.digit('"'), false)
  assertEquals(is.digit('\''), false)
  assertEquals(is.digit('<'), false)
  assertEquals(is.digit(','), false)
  assertEquals(is.digit('>'), false)
  assertEquals(is.digit('.'), false)
  assertEquals(is.digit('?'), false)
  assertEquals(is.digit('/'), false)
  assertEquals(is.digit('`'), false)
  assertEquals(is.digit('~'), false)
})

Deno.test('hexadecimal', () => {
  // Casos válidos de hexadecimal
  assertEquals(is.hexadecimal('0123456789abcdef'), true) // Todos os dígitos hexadecimais em minúsculas
  assertEquals(is.hexadecimal('0123456789ABCDEF'), true) // Todos os dígitos hexadecimais em maiúsculas
  assertEquals(is.hexadecimal('a1b2c3d4e5f6'), true) // Combinação de dígitos hexadecimais em minúsculas
  assertEquals(is.hexadecimal('A1B2C3D4E5F6'), true) // Combinação de dígitos hexadecimais em maiúsculas
  assertEquals(is.hexadecimal('0'), true) // Apenas um dígito hexadecimal

  // Casos inválidos de hexadecimal
  assertEquals(is.hexadecimal(''), false) // String vazia
  assertEquals(is.hexadecimal('g'), false) // Caractere não-hexadecimal
  assertEquals(is.hexadecimal('0123456789abcdefg'), false) // Caractere não-hexadecimal
  assertEquals(is.hexadecimal('hijklmnopqrstuvwxyz'), false) // Letras não-hexadecimais
  assertEquals(is.hexadecimal('ABCDEFGHJKLMNOPQRSTUVWXYZ'), false) // Letras não-hexadecimais
  assertEquals(is.hexadecimal('!@#$%^&*()'), false) // Caracteres especiais
  assertEquals(is.hexadecimal('0123456789abcdef!@#$%^&*()'), false) // Combinação de caracteres inválidos
})

Deno.test('lowercase', () => {
  // Casos válidos de letras minúsculas
  assertEquals(is.lowercase('a'), true)
  assertEquals(is.lowercase('b'), true)
  assertEquals(is.lowercase('z'), true)
  assertEquals(is.lowercase('hello'), true)
  assertEquals(is.lowercase('world'), true)

  // Casos inválidos de letras minúsculas
  assertEquals(is.lowercase('A'), false) // Letra maiúscula
  assertEquals(is.lowercase('B'), false) // Letra maiúscula
  assertEquals(is.lowercase('Z'), false) // Letra maiúscula
  assertEquals(is.lowercase('Hello'), false) // Letra maiúscula
  assertEquals(is.lowercase('WORLD'), false) // Letra maiúscula
  assertEquals(is.lowercase('123'), false) // Números
  assertEquals(is.lowercase('@'), false) // Caractere especial
  assertEquals(is.lowercase(' '), false) // Espaço em branco
  assertEquals(is.lowercase(''), false) // String vazia
})

Deno.test('uppercase', () => {
  // Casos válidos de letras maiúsculas
  assertEquals(is.uppercase('A'), true)
  assertEquals(is.uppercase('B'), true)
  assertEquals(is.uppercase('Z'), true)
  assertEquals(is.uppercase('HELLO'), true)
  assertEquals(is.uppercase('WORLD'), true)

  // Casos inválidos de letras maiúsculas
  assertEquals(is.uppercase('a'), false) // Letra minúscula
  assertEquals(is.uppercase('b'), false) // Letra minúscula
  assertEquals(is.uppercase('z'), false) // Letra minúscula
  assertEquals(is.uppercase('Hello'), false) // Letra minúscula
  assertEquals(is.uppercase('world'), false) // Letra minúscula
  assertEquals(is.uppercase('123'), false) // Números
  assertEquals(is.uppercase('@'), false) // Caractere especial
  assertEquals(is.uppercase(' '), false) // Espaço em branco
  assertEquals(is.uppercase(''), false) // String vazia
})

  