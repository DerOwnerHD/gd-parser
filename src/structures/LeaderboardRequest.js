'use strict';

const { verifyExistingType } = require("../utils/DataVerifier");
const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");

const icons = ["icon", "ship", "ball", "ufo", "wave", "robot", "spider"];

class LeaderboardRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);

        Object.defineProperty(this, "callback", { value: callback });

        if (data.type) verifyExistingType(data.type, "string", "type");
        if (data.count) verifyExistingType(data.count, "number", "count");

        if (data.count < 1) throw new RangeError("count can't be under 1")
        if (data.count > 100) throw new RangeError("count can't be over 100");

        const types = {
            STARS: "top",
            CREATORS: "creators"
        };

        this.type = types[data.type] || "top";
        this.count = data.count || 100;

        Request("getGJScores20", this, async (data, res, err) => {
            if (err) return this.callback({error:true,data:err});

            const json = [];

            data.pop();

            data.forEach(user => {
                json.push({
                    username: user[1] || "-",
                    playerID: +user[2] || 0,
                    accountID: +user[16] || 0,
                    rank: +user[6] || 0,
                    stars: +user[3] || 0,
                    diamonds: +user[46] || 0,
                    coins: +user[13] || 0,
                    userCoins: +user[17] || 0,
                    demons: +user[4] || 0,
                    cp: +user[8] || 0,
                    col1: +user[10] || 1,
                    col2: +user[11] || 1,
                    icon: +user[9] || 0,
                    form: icons[+user[14]] || "icon"
                });
            })

            this.callback(json.splice(0, this.count));
            // servers always return 100 when fetching star leaderboards
            // so this needs to be cut down to given count
        });
    }
}

module.exports = LeaderboardRequest;