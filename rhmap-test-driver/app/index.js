"use strict";

const Utils = require("./src/utils");
const TestRunner = require("./src/test-runner");

const appId = process.argv[2];
const csvPath = process.argv[3];

if (!appId || !csvPath) {
    console.log("usage: node index.js <appId> <path/to/devices.csv>");
    process.exit(1);
}

Utils.getAliasesFromCSV(csvPath, aliases => {
    TestRunner.start(appId, aliases);
});
