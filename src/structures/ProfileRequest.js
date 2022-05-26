'use strict';

const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");
const ProfileBuilder = require("../builders/ProfileBuilder");

class ProfileRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);
        Object.defineProperty(this, "callback", {value: callback});

        this.str = data.str;

        Request("getGJUsers20", this, (data, res, err) => {
            if (err) return this.callback(err);
            this.targetAccountID = data[0][0][16];

            Request("getGJUserInfo20", this, (data, res, err) => {
               if (err) return this.callback(err);
               new ProfileBuilder(data[0][0], (data) => {
                   this.callback(data);
               });
            });
        })
    }
}

exports.ProfileRequest = ProfileRequest;