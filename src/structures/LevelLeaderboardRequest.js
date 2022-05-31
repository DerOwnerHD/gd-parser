'use strict';

const { verifyExistingType } = require("../utils/DataVerifier");
const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");
const XOR = require("../utils/XOR");

const icons = ["icon", "ship", "ball", "ufo", "wave", "robot", "spider"];

class LevelLeaderboardRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);

        Object.defineProperty(this, "callback", { value: callback });

        verifyExistingType(data.name, "string", "name");
        verifyExistingType(data.password, "string", "password");
        verifyExistingType(data.id, "number", "id");
        if (data.type) verifyExistingType(data.type, "string", "type");

        const types = {
            TOP: 1,
            WEEK: 2,
        };

        this.str = data.name || "";

        Request("getGJUsers20", this, async (userData, res, err) => {
            if (err || !userData[0]) return this.callback({error:true});
            if (!JSON.stringify(userData).startsWith("[")) return this.callback("-1");

            this.accountID = +userData[0][16] || 0;
            this.gjp = XOR.encrypt(data.password || "");
            this.type = types[data.type] || 1;
            this.levelID = data.id;

            Request("getGJLevelScores211", this, async (data, res, err) => {
                if (err || !JSON.stringify(data).startsWith("[")) return this.callback({error:true});

                const json = [];

                data.forEach(user => {
                    json.push({
                        username: user[1] || "-",
                        playerID: +user[2] || 0,
                        accountID: +user[16] || 0,
                        rank: +user[6] || 0,
                        percent: +user[3] || 0,
                        coins: +user[13] || 0,
                        date: user[42] + " ago" || "N/A ago",
                        col1: +user[10] || 1,
                        col2: +user[11] || 1,
                        icon: +user[9] || 0,
                        form: icons[+user[14]] || "icon",
                        glow: +user[15] === 2 || false
                    });
                });

                this.callback(json);
            });
        });
    }
}

module.exports = LevelLeaderboardRequest;