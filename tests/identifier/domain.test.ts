// import is from "../../mod.ts";
// import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

// Deno.test("tld and simple subdomains", () => {
//   assertEquals(is.domain("example.com"), true);
//   assertEquals(is.domain("foo.example.com"), true);
//   assertEquals(is.domain("bar.foo.example.com"), true);
//   assertEquals(is.domain("exa-mple.co.uk"), true);
//   assertEquals(is.domain("a.com"), true);
//   assertEquals(is.domain("a.b"), true);
//   assertEquals(is.domain("foo.bar.baz"), true);
//   assertEquals(is.domain("foo-bar.ba-z.qux"), true);
//   assertEquals(is.domain("hello.world"), true);
//   assertEquals(is.domain("ex-am-ple.com"), true);
//   assertEquals(is.domain("xn--80ak6aa92e.com"), true);
//   assertEquals(is.domain("example.a9"), true);
//   assertEquals(is.domain("example.9a"), true);
//   assertEquals(is.domain("example.99"), false);
// });

// // Deno.test("more subdomains", () => {
// //   assertEquals(is.domain("example.com"), true);
// //   assertEquals(is.domain("foo.example.com"), true);
// //   assertEquals(is.domain("example.com"), true);
// //   assertEquals(is.domain("foo.example.com"), true);
// //   assertEquals(is.domain("foo.example.com"), false);
// //   assertEquals(is.domain("-foo.example.com"), false);
// //   assertEquals(is.domain("foo-.example.com"), false);
// //   assertEquals(is.domain("-foo-.example.com"), false);
// //   assertEquals(is.domain("-foo.example.com"), false);
// //   assertEquals(is.domain("foo-.example.com"), false);
// //   assertEquals(is.domain("-foo-.example.com"), false);
// //   assertEquals(is.domain("foo-.bar.example.com"), false);
// //   assertEquals(is.domain("-foo.bar.example.com"), false);
// //   assertEquals(is.domain("-foo-.bar.example.com"), false);
// //   assertEquals(is.domain("-foo-.bar.example.com"), false);
// //   assertEquals(is.domain("foo-.bar.example.com"), false);
// //   assertEquals(is.domain("-foo-.bar.example.com"), false);
// //   assertEquals(is.domain("-foo-.-bar-.example.com"), false);
// //   assertEquals(is.domain("example.com"), true);
// //   assertEquals(is.domain("*.example.com"), false);
// //   assertEquals(is.domain("abcd--def.example.com"), true);
// //   assertEquals(is.domain("ab--cd.ab--cd.example.com"), true);
// // });

// // Deno.test("sld", () => {
// //   assertEquals(is.domain("example.co.uk"), true);
// //   assertEquals(is.domain("exampl1.co.uk"), true);
// //   assertEquals(is.domain("abc.example.co.uk"), false);
// //   assertEquals(is.domain("*.example.co.uk"), false);
// //   assertEquals(is.domain("*.example.co.uk"), true);
// // });

// // Deno.test("punycode", () => {
// //   assertEquals(is.domain("xn--6qq79v.xn--fiqz9s"), true);
// //   assertEquals(is.domain("xn--ber-goa.com"), true);
// //   assertEquals(is.domain("xn--a--ber-goa.com"), false);
// //   assertEquals(is.domain("xn--c1yn36f.example.com"), true);
// //   assertEquals(is.domain("xn--addas-o4a.de"), true);
// //   assertEquals(is.domain("xn--p8j9a0d9c9a.xn--q9jyb4c"), true);
// //   assertEquals(is.domain("привет-мир.рф"), true);
// //   assertEquals(is.domain("test-me.рф"), true);
// //   assertEquals(is.domain("test--me.рф"), false);
// //   assertEquals(is.domain("приветмир.com"), true);
// //   assertEquals(is.domain("xn--b1aghctohfp.xn--p1ai"), true);
// //   assertEquals(is.domain("привет-мир.com"), true);
// //   assertEquals(is.domain("привет-мир.рф"), true);
// //   assertEquals(is.domain("дядя-ваня.рф"), true);
// //   assertEquals(is.domain("дядя-ваня.ru.com"), true);
// // });

// // Deno.test("unicode", () => {
// //   assertEquals(is.domain("はじめよう.みんな"), false);
// //   assertEquals(is.domain("名がドメイン.com"), false);
// //   assertEquals(is.domain("はじめよう.みんな"), true);
// //   assertEquals(is.domain("名がドメイン.com"), true);
// // });

// // Deno.test("country code tld", () => {
// //   assertEquals(is.domain("ai."), false);
// //   assertEquals(is.domain("ai"), false);
// //   assertEquals(is.domain("ai."), true);
// //   assertEquals(is.domain("ai"), true);
// //   assertEquals(is.domain("ae."), false);
// //   assertEquals(is.domain("ae."), true);
// //   assertEquals(is.domain("xx."), false);
// // });

// // Deno.test("invalid tld and subdomain", () => {
// //   assertEquals(is.domain("localhost"), false);
// //   assertEquals(is.domain("127.0.0.1"), false);
// //   assertEquals(is.domain("bar.q-ux"), false);
// //   assertEquals(is.domain("exa_mple.com"), false);
// //   assertEquals(is.domain("example"), false);
// //   assertEquals(is.domain("ex*mple.com"), false);
// //   assertEquals(is.domain("@#$@#$%fd"), false);
// //   assertEquals(is.domain("_example.com"), false);
// //   assertEquals(is.domain("-example.com"), false);
// //   assertEquals(is.domain("xn–pple-43d.com"), false);
// //   assertEquals(is.domain("foo._example.com"), false);
// //   assertEquals(is.domain("foo.-example.com"), false);
// //   assertEquals(is.domain("foo.example-.co.uk"), false);
// //   assertEquals(is.domain("example-.com"), false);
// //   assertEquals(is.domain("example_.com"), false);
// //   assertEquals(is.domain("foo.example-.com"), false);
// //   assertEquals(is.domain("foo.example_.com"), false);
// //   assertEquals(is.domain("example.com-"), false);
// //   assertEquals(is.domain("example.com_"), false);
// //   assertEquals(is.domain("-foo.example.com_"), false);
// //   assertEquals(is.domain("_foo.example.com_"), false);
// //   assertEquals(is.domain("*.com_"), false);
// //   assertEquals(is.domain("*.*.com_"), false);
// // });

// // Deno.test("subdomain underscores", () => {
// //   assertEquals(is.domain("_dnslink.ipfs.io"), true);
// //   assertEquals(is.domain("_dnslink.ip_fs.io"), false);
// //   assertEquals(is.domain("_foo.example.com"), true);
// //   assertEquals(is.domain("xn--_eamop.donata.com"), true);
// //   assertEquals(is.domain("__foo.example.com"), true);
// // });

// // Deno.test("wildcard", () => {
// //   assertEquals(is.domain("*.example.com"), false);
// //   assertEquals(is.domain("*.example.com"), false);
// //   assertEquals(is.domain("*.example.com"), true);
// //   assertEquals(is.domain("*.*.com"), false);
// //   assertEquals(is.domain("*.com"), false);
// //   assertEquals(is.domain("example.com"), true);
// //   assertEquals(is.domain("example.com"), true);
// //   assertEquals(is.domain("*.example.com"), true);
// //   assertEquals(is.domain("*.example.com"), false);
// // });

// // Deno.test("length", () => {
// //   assertEquals(
// //     is.domain(
// //       `${"a".repeat(63)}.${"b".repeat(63)}.${"c".repeat(63)}.${"c".repeat(61)}`,
// //     ),
// //     true,
// //   );
// //   assertEquals(
// //     is.domain(
// //       `${"a".repeat(63)}.${"b".repeat(63)}.${"c".repeat(63)}.${
// //         "c".repeat(61)
// //       }.`,
// //     ),
// //     true,
// //   );
// //   assertEquals(
// //     is.domain(
// //       `${"a".repeat(63)}.${"b".repeat(63)}.${"c".repeat(63)}.${"c".repeat(62)}`,
// //     ),
// //     false,
// //   );
// // });

// // Deno.test("invalid types", () => {
// //   assertEquals(is.domain(3434), false);
// //   assertEquals(is.domain(""), false);
// //   assertEquals(is.domain({}), false);
// //   assertEquals(is.domain(() => {}), false);
// // });

// // Deno.test("invalid values", () => {
// //   assertEquals(is.domain("foo.example.com*"), false);
// //   assertEquals(is.domain("foo.example.com*"), false);
// //   assertEquals(is.domain('google.com"\'"""\\"\\\'test test'), false);
// //   assertEquals(is.domain('google.com.au\'"\'"""\\"\\\'test'), false);
// //   assertEquals(is.domain("..."), false);
// //   assertEquals(is.domain("example..com"), false);
// //   assertEquals(is.domain(".example."), false);
// //   assertEquals(is.domain(".example.com"), false);
// //   assertEquals(is.domain('"example.com"'), false);
// //   assertEquals(is.domain("http://xn--addas-o4a.de"), false);
// // });

// // Deno.test("thai domains", () => {
// //   assertEquals(is.domain("universal-acceptance-test.international"), true);
// //   assertEquals(is.domain("universal-acceptance-test.icu"), true);
// //   assertEquals(is.domain("ยูเอทดสอบ.ไทย"), true);
// //   assertEquals(is.domain("ทีเอชนิค.องค์กร.ไทย"), true);
// //   assertEquals(is.domain("เราไม่ทิ้งกัน.com"), true);
// // });
