'use strict';

const gauntletNames = [
    "Fire Gauntlet",
    "Ice Gauntlet",
    "Poison Gauntlet",
    "Shadow Gauntlet",
    "Lava Gauntlet",
    "Bonus Gauntlet",
    "Chaos Gauntlet",
    "Demon Gauntlet",
    "Time Gauntlet",
    "Crystal Gauntlet",
    "Magic Gauntlet",
    "Spike Gauntlet",
    "Monster Gauntlet",
    "Doom Gauntlet",
    "Death Gauntlet"
];

const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");
const { verifyExistingType } = require("../utils/DataVerifier");

class GauntletsRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);

        Object.defineProperty(this, "callback", { value: callback });

        if (data.special) verifyExistingType(data.special, "boolean", "special");

        this.special = data.special ? 1 : 0;

        Request("getGJGauntlets21", this, (data, res, err) => {
            if (err) return this.callback({error:true,data:err});

            if (!JSON.stringify(data).startsWith("[")) return this.callback("-1");

            let gauntlets = [];

            data[0].forEach(gauntlet => {
                let levels = [];
                gauntlet[3].split(",").forEach(level => levels = [...levels, parseInt(level)]);
                gauntlets = [...gauntlets, {
                    id: +gauntlet[1],
                    name: gauntletNames[+gauntlet[1] - 1] || "N/A",
                    levels: levels
                }];
            })

            this.callback(gauntlets);
        });
    }
}

module.exports = GauntletsRequest;