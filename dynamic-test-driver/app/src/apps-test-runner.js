"use strict";

const API = require("./ups-api");
const Utils = require("./utils");
const TestRunner = require("./test-runner");

const DELAY = 1000;

class AppsTestRunner extends TestRunner {

    constructor(args) {
        super(args);
    }

    start(apps) {
        super.start();
        console.log(`Total apps: ${apps.length}`);

        const test = app => {
            console.log(`Sending message to all devices of "${app.name}" [${app.pushApplicationID}]`);
            API.sendNotificationToApp(this.message, app, this.options)
                .then(res => console.log(`[${app.pushApplicationID}] RESPONSE: ${JSON.stringify(res)}`))
                .catch(err => console.log(`[${app.pushApplicationID}] ERROR: ${err}`));
        };

        Utils.forEachAsyncWithInterval(apps, test, this.delay);
    }
}

module.exports = AppsTestRunner;
