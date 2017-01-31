"use strict";

const request = require("request");

const BASE_URL = "http://testing-mlwmibzwxpykclbacoh5rgsc-live.eteam.skunkhenry.com";

class API {

    static sendNotificationToAlias(message, appId, alias) {
        return request.get(`${BASE_URL}/push/${appId}/${alias}`);
    }
}

module.exports = API;