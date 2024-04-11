const TEST_SUITE = {
    functions: require("./functions")
};

async function runCategory (
    testCategory,
    categoryName = "{CATEGORY}"
) {
    let error = null;

    for (let testName in testCategory) {
        const test = testCategory[testName];

        try {
            await test();

            console.log(`[ ] ${categoryName}/${testName}`);
        } catch {
            console.log(`[x] [${categoryName}/${testName}]`);

            error = `Test "${categoryName}/${testName}" failed.`;
        }
    }

    if (error !== null) {
        throw new Error(error);
    }
}

async function runSuite (testSuite) {
    let error = null;

    try {
        for (let categoryName in testSuite) {
            const testCategory = testSuite[categoryName];

            try {
                await runCategory(testCategory, categoryName);
            } catch (e) {
                error = e;
            }
        }

        if (error) {
            throw new Error(error);
        }

        console.log();
        console.log("All tests passed successfully.");
    } catch {
        console.log();
        console.log("Failed test detected.");
        console.log("Further operations have been cancelled.");
        console.log("Please diagnose the problem before continuing.");

        process.exit(1);
    }
}

async function main () {
    const testSuite = TEST_SUITE;

    await runSuite(testSuite);
}

main();

module.exports = TEST_SUITE;
