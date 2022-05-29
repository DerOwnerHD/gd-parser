'use strict';

const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");
const { verifyExistingType } = require("../utils/DataVerifier");

class CredentialsRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);

        Object.defineProperty(this, "callback", { value: callback });

        verifyExistingType(data.name, "string", "name");
        verifyExistingType(data.password, "string", "password");

        this.userName = data.name || ""; // why the FUCK does this require userName and not just username??
        this.password = data.password || "";

        this.secret = "Wmfv3899gc9" || data.secret;
        this.udid = "lq21KGQY-nftu-Cu7R-WEyB-mv9Ygxob74"; // randomly generated

        Request("accounts/loginGJAccount", this, (data, res, err) => {
            if (err) return this.callback({error:true});

            const ids = Object.keys(data)[0].split(",");
            this.callback({
                accountID: +ids[0],
                playerID: +ids[1]
            });
        });
    }
}

module.exports = CredentialsRequest;