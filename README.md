JS Programming Task
===================

Simple server with a simple logic using pure node.js without any third-party modules.

This server simply processes all numbers in the given JSON with the formula (*x* + 1) * *a* or (*x* + *x*) * *a*, where *a* = {2, 3, ..., 6} and *x* is the original value.

## Installation

Just clone this repository into your appropriate directory.

## Usage

Run in the project directory:

```shell
  sudo -s
  npm start 8080
```

where 8080 is listening port

### Examples

```shell
curl -X POST -H 'Content-Type: application/json' -i 'http://127.0.0.1:8080/' --data '{"1":"1","2":"2","3":{"3":3,"a":4,"b":"b"},"5":[5]}'
```

```json
{
  "1": "1",
  "2": 2,
  "3": {
    "3": 3,
    "a": 4,
    "b": "b"
  },
  "5": [
    5
  ]
}
```
```json
[
  {
    "1": 4,
    "2": 6,
    "3": {
      "3": 8,
      "a": 10,
      "b": "b"
    },
    "5": [
      12
    ]
  },
  {
    "1": 6,
    "2": 9,
    "3": {
      "3": 12,
      "a": 15,
      "b": "b"
    },
    "5": [
      18
    ]
  },
  {
    "1": 8,
    "2": 12,
    "3": {
      "3": 16,
      "a": 20,
      "b": "b"
    },
    "5": [
      24
    ]
  },
  {
    "1": 10,
    "2": 15,
    "3": {
      "3": 20,
      "a": 25,
      "b": "b"
    },
    "5": [
      30
    ]
  },
  {
    "1": 12,
    "2": 18,
    "3": {
      "3": 24,
      "a": 30,
      "b": "b"
    },
    "5": [
      36
    ]
  },
  {
    "1": 14,
    "2": 21,
    "3": {
      "3": 28,
      "a": 35,
      "b": "b"
    },
    "5": [
      42
    ]
  }
]
```

```shell
curl -X POST -H 'Content-Type: application/json' -i 'http://127.0.0.1:8080/?test=1' --data '{"1":"1","2":"2","3":{"3":3,"a":4,"b":"b"},"5":[5]}'
```

```json
{
  "1": "1",
  "2": 2,
  "3": {
    "3": 3,
    "a": 4,
    "b": "b"
  },
  "5": [
    5
  ]
}
```

```json
[
  {
    "1": 4,
    "2": 8,
    "3": {
      "3": 12,
      "a": 16,
      "b": "b"
    },
    "5": [
      20
    ]
  },
  {
    "1": 6,
    "2": 12,
    "3": {
      "3": 18,
      "a": 24,
      "b": "b"
    },
    "5": [
      30
    ]
  },
  {
    "1": 8,
    "2": 16,
    "3": {
      "3": 24,
      "a": 32,
      "b": "b"
    },
    "5": [
      40
    ]
  },
  {
    "1": 10,
    "2": 20,
    "3": {
      "3": 30,
      "a": 40,
      "b": "b"
    },
    "5": [
      50
    ]
  },
  {
    "1": 12,
    "2": 24,
    "3": {
      "3": 36,
      "a": 48,
      "b": "b"
    },
    "5": [
      60
    ]
  },
  {
    "1": 14,
    "2": 28,
    "3": {
      "3": 42,
      "a": 56,
      "b": "b"
    },
    "5": [
      70
    ]
  }
]
```

## Contributing

Refactoring or remarks for improving the code would be welcome.

## Todo

Make tests

## Release History

* 0.1.0 Initial release

## License

ISC © Yevhen Stohniienko
