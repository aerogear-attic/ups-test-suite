"use strict";

const API = require("./rhmap-api");

class TestRunner {

    constructor() {
        // The ID of the application that owns the target aliases.
        this.appId;
        // The time between one request and another
        this.delay;
    }

    /**
     * The URL of the node backend
     */
    set endPoint(endPoint) {
        if (endPoint.lastIndexOf('/') === endPoint.length - 1) {
            endPoint.slice(-1);
        }
        this.api = new API(endPoint);
    }

    /**
     * It sends a request to the backend endpoint for each alias with a fix delay between each one
     */
    start(aliases) {
        if (!this.api || !this.appId) {
            throw new Error("An endpoint URL and an application ID must be provided");
        }

        aliases.forEach((alias, i) => {
            setTimeout(() => {
                console.log(`Sending notification to ${alias}`);
                this.api.sendNotificationToAlias(this.appId, alias)
                    .on("error", err => {
                        console.log(`[${alias}] ERROR: ${err}`)
                    })
                    .on("response", res => {
                        console.log(`[${alias}] RESPONSE: ${res.statusCode}`)
                    });;
            }, this.delay * i);
        });
    }
}

module.exports = TestRunner;
