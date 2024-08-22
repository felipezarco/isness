import is from "../../mod.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";

// Test for valid ObjectId
Deno.test("is.objectId should return true for valid ObjectId", () => {
  const validObjectId = "507f1f77bcf86cd799439011";
  assertEquals(is.objectId(validObjectId), true);
});

// Test for invalid ObjectId
Deno.test("is.objectId should return false for invalid ObjectId", () => {
  const invalidObjectId = "invalidObjectId123";
  assertEquals(is.objectId(invalidObjectId), false);
});

// Test for ObjectId with correct length but invalid characters
Deno.test("is.objectId should return false for ObjectId with invalid characters", () => {
  const invalidObjectId = "507f1f77bcf86cd7994390zz";
  assertEquals(is.objectId(invalidObjectId), false);
});

// Test for empty string
Deno.test("is.objectId should return false for empty string", () => {
  const emptyString = "";
  assertEquals(is.objectId(emptyString), false);
});

// Test for null
Deno.test("is.objectId should return false for null", () => {
  const nullValue = null;
  assertEquals(is.objectId(nullValue), false);
});

// Test for undefined
Deno.test("is.objectId should return false for undefined", () => {
  const undefinedValue = undefined;
  assertEquals(is.objectId(undefinedValue), false);
});

// Test for non-string types (number, object, array)
Deno.test("is.objectId should return false for non-string types", () => {
  const numberValue = 12345;
  const objectValue = { id: "507f1f77bcf86cd799439011" };
  const arrayValue = ["507f1f77bcf86cd799439011"];

  assertEquals(is.objectId(numberValue), false);
  assertEquals(is.objectId(objectValue), false);
  assertEquals(is.objectId(arrayValue), false);
});
