/**
 * Change the promise provider.
 * @param promise The promise to convert.
 * @param newPromiseProvider The new promise provider object.
 * @example
 * ```
 * const changePromise = require("convert-promise");
 * const BBPromise = require("bluebird");
 *
 * const es6Promise = new Promise(resolve => resolve("Hello World!")); // Regular native promise.
 * const bluebirdPromise = changePromise(es6Promise, BBPromise); // Bluebird promise.
 * ```
*/
declare function newPromiseProvider<T>(promise: PromiseLike<T>, newPromiseProvider: PromiseConstructorLike): PromiseLike<T>;

export = newPromiseProvider;
