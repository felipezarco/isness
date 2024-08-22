/**
 * Check if value is a valid URL
 * @param value - Value to check
 * @returns Whether the value is a valid URL
 * @param options - Options for the URL check
 * @param options.format - Format of the URL to check
 * @example is.url("http://www.felipezarco.com")
 * @example is.url("http://www.felipezarco.com", { format: 'http' })
 */

// assertEquals(
//   is.url("https://felipezarco"),
//   false,
//   "Invalid URL without domain",
// );
// assertEquals(
//   is.url("https://felipezarco."),
//   false,
//   "Invalid URL with domain ending in dot",
// );
// assertEquals(
//   is.url("https://felipezarco.com."),
//   false,
//   "Invalid URL with domain ending in dot",
// );
// assertEquals(
//   is.url("https://felipezarco.com/."),
//   false,
//   "Invalid URL with path ending in dot",
// );

export function url(value: unknown, options: {
  format: "uri" | "http" | "https" | "web";
} = { format: "web" }): boolean {
  if (typeof value !== "string") {
    return false;
  }

  if (!value.length) {
    return false;
  }

  if (/\.+$/.test(value)) {
    return false;
  }

  if (!/\/$/.test(value)) {
    value += "/";
  }

  switch (options.format) {
    case "uri":
      return Boolean(isUri(value));
    case "http":
      return Boolean(isHttpUri(value));
    case "https":
      return Boolean(isHttpsUri(value));
    case "web":
      return Boolean(isWebUri(value));
    default:
      return Boolean(isWebUri(value));
  }
}

const isUri = isIri;
const isHttpUri = isHttpIri;
const isHttpsUri = isHttpsIri;
const isWebUri = isWebIri;

function splitUri(uri: string) {
  const splitted = uri.match(
    /(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,
  );
  return splitted;
}

function isIri(value: string) {
  if (!value) {
    return;
  }

  if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value)) {
    return;
  }
  if (/%[^0-9a-f]/i.test(value)) return;
  if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)) return;

  const splitted = splitUri(value);
  const scheme = splitted?.[1];
  const authority = splitted?.[2];
  const path = splitted?.[3];
  const query = splitted?.[4];
  const fragment = splitted?.[5];

  if (!(scheme && scheme.length && path && path?.length >= 0)) return;
  if (authority && authority.length) {
    if (!(path.length === 0 || /^\//.test(path))) return;
  } else {
    if (path && /^\/\//.test(path)) return;
  }

  if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase())) return;

  let out = scheme + ":";
  if (authority && authority.length) {
    out += "//" + authority;
  }

  out += path;

  if (query && query.length) {
    out += "?" + query;
  }

  if (fragment && fragment.length) {
    out += "#" + fragment;
  }

  return out;
}

function isHttpIri(value: string, allowHttps = false) {
  if (!isIri(value)) {
    return;
  }

  if (value.split(".").length < 2) {
    return false;
  }

  const splitted = splitUri(value);
  const scheme = splitted?.[1];
  let authority = splitted?.[2];
  const path = splitted?.[3];
  const query = splitted?.[4];
  const fragment = splitted?.[5];

  if (!scheme) return;

  if (!authority) {
    return false;
  }

  if (allowHttps) {
    if (scheme.toLowerCase() !== "https") return false;
  } else {
    if (scheme.toLowerCase() !== "http") return false;
  }

  let port = "";
  if (/:(\d+)$/.test(authority)) {
    port = authority.match(/:(\d+)$/)?.[0] || "";
    authority = authority.replace(/:\d+$/, "");
  }

  let out = scheme + ":";
  out += "//" + authority;

  if (port) {
    out += port;
  }

  out += path;

  if (query && query.length) {
    out += "?" + query;
  }

  if (fragment && fragment.length) {
    out += "#" + fragment;
  }

  return out;
}

function isHttpsIri(value: string) {
  return isHttpIri(value, true);
}

function isWebIri(value: string) {
  return isHttpIri(value) || isHttpsIri(value);
}

// The commonjs version was originally found here:
// Copyright (c) 2013 Odysseas Tsatalos and oDesk Corporation
// Licensed under the MIT License. See the full license at:
// https://github.com/ogt/valid-url/blob/master/LICENSE
