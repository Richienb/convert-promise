"use strict"

module.exports = (promise, newPromiseProvider = Promise) => newPromiseProvider.resolve(promise)
