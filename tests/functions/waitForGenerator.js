const { waitForGenerator } = require("../../src");

function * createCounter (maxValue = Number.MAX_SAFE_INTEGER) {
    let accumulator = 0;

    while (accumulator < maxValue) {
        yield accumulator++;
    }
}

async function main () {
    const counter = createCounter(10);

    await waitForGenerator(counter);
}

module.exports = main;
