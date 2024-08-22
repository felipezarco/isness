import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

Deno.test("Valid URL", () => {
  assertEquals(
    is.url("https://github.com/felipezarco/isness"),
    true,
    "Valid URL",
  );
  assertEquals(is.url("http://felipezarco.com/"), true, "Valid URL with HTTP");
  assertEquals(
    is.url("https://felipezarco.com.br/"),
    true,
    "Valid URL with BR",
  );
  assertEquals(
    is.url("https://felipezarco.com.br/path"),
    true,
    "Valid URL with path",
  );
  assertEquals(
    is.url("https://felipezarco.com.br/path?query=1"),
    true,
    "Valid URL with query",
  );
  assertEquals(
    is.url("https://felipezarco.com.br/path?query=1#hash"),
    true,
    "Valid URL with hash",
  );

  assertEquals(
    is.url("felipezarco.com"),
    false,
    "Invalid URL without protocol",
  );
  assertEquals(
    is.url("https://felipezarco"),
    false,
    "Invalid URL without domain",
  );
  assertEquals(
    is.url("https://felipezarco."),
    false,
    "Invalid URL with domain ending in dot",
  );
  assertEquals(
    is.url("https://felipezarco.com."),
    false,
    "Invalid URL with domain ending in dot",
  );
  assertEquals(
    is.url("https://felipezarco.com/."),
    false,
    "Invalid URL with path ending in dot",
  );

  assertEquals(is.url(true), false, "Invalid URL with boolean");
  assertEquals(is.url(null), false, "Invalid URL with null");
  assertEquals(is.url(undefined), false, "Invalid URL with undefined");
  assertEquals(is.url(0), false, "Invalid URL with number");
  assertEquals(is.url({}), false, "Invalid URL with object");
  assertEquals(is.url([]), false, "Invalid URL with array");
  assertEquals(is.url(""), false, "Invalid URL with empty string");
  assertEquals(is.url(" "), false, "Invalid URL with space");
});

Deno.test("Valid HTTP URL", () => {
  assertEquals(
    is.url("http://www.felipezarco.com/", { format: "http" }),
    true,
    "Valid HTTP URL",
  );
  assertEquals(
    is.url("http://www.felipezarco.com", { format: "http" }),
    true,
    "Valid HTTP URL",
  );
  assertEquals(
    is.url("http://www.felipezarco.com/foo/bar/test.html", { format: "http" }),
    true,
    "Valid HTTP URL with path",
  );
  assertEquals(
    is.url("http://www.felipezarco.com/?foo=bar", { format: "http" }),
    true,
    "Valid HTTP URL with query",
  );
  assertEquals(
    is.url("http://www.felipezarco.com:8080/test.html", { format: "http" }),
    true,
    "Valid HTTP URL with port",
  );
  assertEquals(
    is.url("http://felipezarco.w3.org/path%20with%20spaces.html", {
      format: "http",
    }),
    true,
    "Valid HTTP URL with spaces",
  );
  assertEquals(
    is.url("http://192.168.0.1/", { format: "http" }),
    true,
    "Valid HTTP URL with IP",
  );

  assertEquals(
    is.url("ftp://ftp.felipezarco.com", { format: "http" }),
    false,
    "Invalid HTTP URL with FTP",
  );
  assertEquals(
    is.url("http:www.felipezarco.com", { format: "http" }),
    false,
    "Invalid HTTP URL without slashes",
  );
  assertEquals(
    is.url("https://www.felipezarco.com", { format: "http" }),
    false,
    "Invalid HTTP URL with HTTPS",
  );
});

Deno.test("Valid HTTPS URL", () => {
  assertEquals(
    is.url("https://www.felipezarco.com/", { format: "https" }),
    true,
    "Valid HTTPS URL",
  );
  assertEquals(
    is.url("https://www.felipezarco.com/", { format: "https" }),
    true,
    "Valid HTTPS URL",
  );
  assertEquals(
    is.url("https://www.felipezarco.com/foo/bar/test.html", {
      format: "https",
    }),
    true,
    "Valid HTTPS URL with path",
  );
  assertEquals(
    is.url("https://www.felipezarco.com/?foo=bar", { format: "https" }),
    true,
    "Valid HTTPS URL with query",
  );
  assertEquals(
    is.url("https://www.felipezarco.com:8080/test.html", { format: "https" }),
    true,
    "Valid HTTPS URL with port",
  );
  assertEquals(
    is.url("https://felipezarco.w3.org/path%20with%20spaces.html", {
      format: "https",
    }),
    true,
    "Valid HTTPS URL with spaces",
  );
  assertEquals(
    is.url("https://192.168.0.1/", { format: "https" }),
    true,
    "Valid HTTPS URL with IP",
  );

  assertEquals(
    is.url("http://www.felipezarco.com/", { format: "https" }),
    false,
    "Invalid HTTPS URL with HTTP",
  );
  assertEquals(
    is.url("ftp://ftp.felipezarco.com", { format: "https" }),
    false,
    "Invalid HTTPS URL with FTP",
  );
  assertEquals(
    is.url("https:www.felipezarco.com", { format: "https" }),
    false,
    "Invalid HTTPS URL without slashes",
  );
});

Deno.test("Valid URI", () => {
  assertEquals(
    is.url("http://localhost/", { format: "uri" }),
    true,
    "Valid URI with localhost",
  );
  assertEquals(
    is.url("http://felipezarco.w3.org/path%20with%20spaces.html", {
      format: "uri",
    }),
    true,
    "Valid URI with spaces",
  );
  assertEquals(
    is.url("http://felipezarco.w3.org/%20", { format: "uri" }),
    true,
    "Valid URI with encoded space",
  );
  assertEquals(
    is.url("ftp://ftp.is.co.za/rfc/rfc1808.txt", { format: "uri" }),
    true,
    "Valid URI with FTP",
  );
  assertEquals(
    is.url("mailto:John.Doe@felipezarco.com", { format: "uri" }),
    true,
    "Valid URI with mailto",
  );
  assertEquals(
    is.url("tel:+1-816-555-1212", { format: "uri" }),
    true,
    "Valid URI with tel",
  );

  assertEquals(
    is.url("", { format: "uri" }),
    false,
    "Invalid URI with empty string",
  );
  assertEquals(
    is.url("foo", { format: "uri" }),
    false,
    "Invalid URI with plain text",
  );
  assertEquals(
    is.url("foo@bar", { format: "uri" }),
    false,
    "Invalid URI with plain text and @",
  );
  assertEquals(
    is.url("http://<foo>", { format: "uri" }),
    false,
    "Invalid URI with illegal characters",
  );
  assertEquals(
    is.url("://bob/", { format: "uri" }),
    false,
    "Invalid URI with empty schema",
  );
  assertEquals(
    is.url("1http://bob", { format: "uri" }),
    false,
    "Invalid URI with bad schema",
  );
  assertEquals(
    is.url("http://felipezarco.w3.org/%illegal.html", { format: "uri" }),
    false,
    "Invalid URI with illegal escape",
  );
});

Deno.test("Valid Web URI", () => {
  assertEquals(
    is.url("https://www.felipezarco.com/", { format: "web" }),
    true,
    "Valid Web URI with HTTPS",
  );
  assertEquals(
    is.url("http://www.felipezarco.com/", { format: "web" }),
    true,
    "Valid Web URI with HTTP",
  );
  assertEquals(
    is.url("https://www.felipezarco.com/foo/bar/test.html", { format: "web" }),
    true,
    "Valid Web URI with path",
  );
  assertEquals(
    is.url("http://www.felipezarco.com/?foo=bar", { format: "web" }),
    true,
    "Valid Web URI with query",
  );
  assertEquals(
    is.url("https://www.felipezarco.com:8080/test.html", { format: "web" }),
    true,
    "Valid Web URI with port",
  );
  assertEquals(
    is.url("http://felipezarco.w3.org/path%20with%20spaces.html", {
      format: "web",
    }),
    true,
    "Valid Web URI with spaces",
  );
  assertEquals(
    is.url("http://192.168.0.1/", { format: "web" }),
    true,
    "Valid Web URI with IP",
  );

  assertEquals(
    is.url("ftp://ftp.felipezarco.com", { format: "web" }),
    false,
    "Invalid Web URI with FTP",
  );
  assertEquals(
    is.url("https:www.felipezarco.com", { format: "web" }),
    false,
    "Invalid Web URI without slashes",
  );
  assertEquals(
    is.url("http:www.felipezarco.com", { format: "web" }),
    false,
    "Invalid Web URI without slashes",
  );
});
