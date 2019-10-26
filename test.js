import test from "ava"
import convertPromise from "."
import BBPromise from "bluebird"
import isPromise from "p-is-promise"

test("main", (t) => {
    const es6Promise = new Promise((resolve) => resolve("Hello World!")) // Regular native promise.
    t.true(isPromise(es6Promise))

    const bluebirdPromise = convertPromise(es6Promise, BBPromise) // Bluebird promise.
    t.true(isPromise(bluebirdPromise))

    const convertedBackEs6Promise = convertPromise(bluebirdPromise, Promise)
    t.true(isPromise(convertedBackEs6Promise))
})
