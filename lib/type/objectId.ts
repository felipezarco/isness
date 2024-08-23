/**
 * Returns true if the given value is a 24 character hex string, which is the most commonly used string representation
 * of an ObjectId.
 *
 * #### Example:
 *
 * is.objectId(new mongoose.Types.ObjectId()); // true
 * is.objectId('62261a65d66c6be0a63c051f'); // true
 *
 * is.objectId('0123456789ab'); // false
 * is.objectId(6); // false
 * is.objectId(new User({ name: 'test' })); // false
 * is.objectId({ test: 42 }); // false
 *
 * @method isObjectId
 * @param {unknown} value
 * @returns {boolean} true if `value` is an ObjectId instance _or_ a 24 char hex string
 */

export default function objectId(value: unknown): boolean {
  const isBsonType = (obj: unknown, typename: unknown) => {
    return (
      typeof obj === "object" &&
      obj !== null &&
      (obj as {
          _bsontype?: unknown;
        })._bsontype === typename
    );
  };
  const objectIdHexRegexp = /^[0-9A-Fa-f]{24}$/;
  return isBsonType(value, "ObjectId") ||
    (typeof value === "string" && objectIdHexRegexp.test(value));
}

// Copyright (c) 2010-2013 LearnBoost dev@learnboost.com Copyright (c) 2013-2021 Automattic
// Licensed under the MIT License. See the full license at:
// https://github.com/Automattic/mongoose/blob/master/LICENSE.md
