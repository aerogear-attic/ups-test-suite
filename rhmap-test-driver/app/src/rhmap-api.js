"use strict";

const BASE_URL = "http://testing-mlwmibzwxpykclbacoh5rgsc-live.eteam.skunkhenry.com/";

class API {

    static sendNotificationToAlias(message, alias) {
        setTimeout(() => {
            console.log(`Notification sent to ${alias}`);
        }, 1000);
    }
}

module.exports = API;
