'use strict';

const { verifyExistingType } = require("../utils/DataVerifier");

class BaseRequest {
    constructor(data, callback) {

        Object.defineProperty(this, "callback", { value: callback });

        if (data.secret) verifyExistingType(data.secret, "string", "secret");
        if (data.gameVersion) verifyExistingType(data.gameVersion, "number", "gameVersion");
        if (data.binaryVersion) verifyExistingType(data.binaryVersion, "number", "binaryVersion");
        if (data.gdw) verifyExistingType(data.gdw, "number", "gdw");

        this.secret = data.secret || "Wmfd2893gb7";
        this.gameVersion = data.gameVersion || 21;
        this.binaryVersion = data.binaryVersion || 35;
        this.gdw = data.gdw || 0;
    }
}

exports.BaseRequest = BaseRequest;