"use strict";

const Utils = require("./src/utils");
const TestRunner = require("./src/test-runner");

const endPoint = process.argv[2];
const appId = process.argv[3];
const csvPath = process.argv[4];
const rawDelay = process.argv[5];

if (!endPoint || !appId || !csvPath || !rawDelay) {
    console.log("usage: node index.js <endpoint url> <appId> <path/to/devices.csv> <delay>");
    process.exit(1);
}

const delay = Number.parseInt(rawDelay);

if (!delay || delay < 1) {
    console.log("Missing argument: 'delay' must be a positive integer.");
    process.exit(1);
}

const testRunner = new TestRunner();
testRunner.endPoint = endPoint;
testRunner.appId = appId;
testRunner.delay = delay;

Utils.getAliasesFromCSV(csvPath, aliases => testRunner.start(aliases));
