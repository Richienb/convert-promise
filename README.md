# Convert promise [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/convert-promise/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/convert-promise)

Convert the promise to use another promise provider.

[![NPM Badge](https://nodei.co/npm/convert-promise.png)](https://npmjs.com/package/convert-promise)

## Install

```sh
npm install convert-promise
```

## Usage

```js
const convertPromise = require("convert-promise");
const BBPromise = require("bluebird");

const es6Promise = new Promise(resolve => resolve("Hello World!")); // Regular native promise.
const bluebirdPromise = convertPromise(es6Promise, BBPromise); // Bluebird promise.
```

## API

### convertPromise(promise, newPromiseProvider)

#### promise

Type: `PromiseLike`

The promise to convert.

#### newPromiseProvider

Type: `PromiseContructorLike`\
Default: `Promise`

The new promise provider object.
