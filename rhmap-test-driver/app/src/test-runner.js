"use strict";

const API = require("./rhmap-api");

const DELAY = 6500;

class TestRunner {

    static start(appId, aliases) {

        const message = "Hello from rhmap-test-driver!";

        aliases.forEach((alias, i) => {
            setTimeout(() => {
                console.log(`Sending notification to ${alias}`);
                API.sendNotificationToAlias(message, appId, alias)
                    .on("error", err => {
                        console.log(`[${alias}] FAILED: ${err}`)
                    })
                    .on("response", res => {
                        console.log(`[${alias}] SUCCESS`)
                    });;
            }, DELAY * i);
        });
    }
}

module.exports = TestRunner;
