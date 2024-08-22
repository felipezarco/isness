A simple library to check if a value is what you expect it to be.

## Usage

### Install

Node:

```sh
npx jsr add @zarco/isness
```

Deno:

```sh
deno add @zarco/isness
```

### Usage

```ts
import * as is from "@zarco/isness";

if (is.string("hello")) {
  // do something
}
```

### Methods

The tables below show the methods available in the package, divided by category.
Each example consists of one or more values that evaluate to true for the
method.

#### Character

The following methods check if a string is composed of a specific set of
characters.

| Method         | Description                                                         | Example  |
| -------------- | ------------------------------------------------------------------- | -------- |
| `alphabetic`   | Checks if a string is alphabetic                                    | "abc"    |
| `alphanumeric` | Checks if the given string consists only of alphanumeric characters | "abc123" |
| `ascii`        | Checks if a string is ascii                                         | "abc123" |
| `digit`        | Checks if a string is a digit                                       | "3"      |
| `hexadecimal`  | Checks if a string is hexadecimal                                   | "a1b2c3" |
| `lowercase`    | Checks if a string is lowercase                                     | "abc"    |
| `uppercase`    | Checks if a string is uppercase                                     | "ABC"    |
| `whitespace`   | Checks if a string is a whitespace                                  | " "      |

#### Type

The following methods check if a value is of a specific type.

| Method        | Description                       | Example                    |
| ------------- | --------------------------------- | -------------------------- |
| `array`       | Checks if a value is an array     | [1, 2, 3]                  |
| `string`      | Checks if a value is a string     | "hello"                    |
| `boolean`     | Checks if a value is a boolean    | true                       |
| `booleanLike` | Checks if a value is boolean-like | true, "true" or 1          |
| `number`      | Checks if a value is a number     | 123, 3.14, "123", 0        |
| `objectId`    | Checks if a value is an ObjectId  | "507f1f77bcf86cd799439011" |
| `string`      | Checks if a value is a string     | "hello", ""                |

#### Temporal

The following are the date/time related methods.

| Method | Description                 | Example                  |
| ------ | --------------------------- | ------------------------ |
| `date` | Checks if a value is a date | new Date(), "2021-01-01" |

#### Identifier

The following are the unique identificator methods

| Method   | Description                        | Example                          |
| -------- | ---------------------------------- | -------------------------------- |
| `domain` | Checks if a value is a domain name | "example.com"                    |
| `email`  | Checks if a value is an email      | "felipezarco@hotmail.com"        |
| `url`    | Checks if a value is an URL        | "https://github.com/felipezarco" |

More details about each method can be found in the
[API documentation](https://jsr.io/@zarco/isness/doc).

## Contributing

If you would like to contribute to this package you can (and should)
[open an issue](https://github.com/felipezarco/isness/issues/new) and/or submit
your own [pull request](https://github.com/felipezarco/isness/compare).

Thanks for your interest in contributing to this repo!

## Author

[Luiz Felipe Zarco](https://github.com/felipezarco) (felipezarco@hotmail.com)

## License

This code is licensed under the
[MIT License](https://github.com/felipezarco/isness/blob/main/LICENSE). See the
[LICENSE](https://github.com/felipezarco/isness/blob/main/LICENSE) file for more
info.
