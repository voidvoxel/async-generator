async function waitForGenerator (generator) {
    while (generator.next().done === false) {}
}

module.exports = waitForGenerator;
