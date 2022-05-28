'use strict';

const { BaseRequest } = require("./BaseRequest");
const { verifyExistingType } = require("../utils/DataVerifier");
const Request = require("../utils/Request");
const ProfileBuilder = require("../builders/ProfileBuilder");

class ProfileRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);

        Object.defineProperty(this, "callback", { value: callback });

        verifyExistingType(data.name, "string", "name");

        this.str = data.name;

        Request("getGJUsers20", this, (data, res, err) => {
            if (err) return this.callback(err);
            this.targetAccountID = data[0][16];

            Request("getGJUserInfo20", this, (data, res, err) => {
               if (err) return this.callback(err);
               new ProfileBuilder(data, (data) => {
                   this.callback(data);
               });
            });
        });
    }
}

module.exports = ProfileRequest;