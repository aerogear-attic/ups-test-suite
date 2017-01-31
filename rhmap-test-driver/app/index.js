"use strict";

const API = require("./src/rhmap-api");
const TestRunner = require("./src/test-runner");

const appId = process.argv[2];
const csvPath = process.argv[3];

if (!appId || !csvPath) {
    console.log("usage: node index.js <appId> <path/to/devices.csv>");
    process.exit(1);
}

const aliases = getAliasesFromCSV();
TestRunner.start(appId, aliases);

function getAliasesFromCSV() {
    // TODO
    return ["josemi-app"];
}

// TODO: add some concurrency
