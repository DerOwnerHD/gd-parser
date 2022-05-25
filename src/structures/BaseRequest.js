'use strict';

const Request = require("../utils/Request");

class BaseRequest {
    constructor(data, callback) {

        Object.defineProperty(this, "callback", { value: callback });

        this.secret = data.secret || "Wmfd2893gb7";
        this.gameVersion = data.gameVersion || 21;
        this.binaryVersion = data.binaryVersion || 35;
        this.gdw = data.gdw || 0;
    }
}

exports.BaseRequest = BaseRequest;