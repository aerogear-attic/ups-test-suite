"use strict";

const API = require("./rhmap-api");

const DELAY = 6500;

class TestRunner {

    static start(appID, aliases) {

        const message = "Hello from rhmap-test-driver!";

        aliases.forEach((alias, i) => {
            setTimeout(() => {
                console.log(`Sending notification to ${alias}`);
                API.sendNotificationToAlias(message, alias);
            }, DELAY * i);
        });
    }
}

module.exports = TestRunner;
