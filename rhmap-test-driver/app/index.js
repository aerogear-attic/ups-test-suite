"use strict";

const Utils = require("./src/utils");
const TestRunner = require("./src/test-runner");
const commander = require("commander");

const DEFAULT_DELAY = 6500;

commander
    .version("1.0.0")
    .usage("node index.js [options]")
    .option("-e, --endpoint <url>", "The backend url")
    .option("-a, --app-id <id>", "The ID of the application that owns the target aliases")
    .option("-c, --csv <path>", "The path to the CSV path containing the aliases")
    .option("-d, --delay <ms>", "The delay between each request", parseInt, DEFAULT_DELAY)
    .parse(process.argv)

if (!commander.endpoint || !commander.appId || !commander.csv) {
    commander.help();
    process.exit(1);
}

const testRunner = new TestRunner();
testRunner.endPoint = commander.endpoint;
testRunner.appId = commander.appId;
testRunner.delay = commander.delay;
testRunner.message = "Blah blah blah";

Utils.getAliasesFromCSV(commander.csv, aliases => testRunner.start(aliases));
