'use strict';

const difficulties = [ // pack[6]
    "Auto",
    "Easy",
    "Normal",
    "Hard",
    "Harder",
    "Insane",
    "Hard Demon",
    "Easy Demon",
    "Medium Demon",
    "Insane Demon",
    "Extreme Demon"
];

const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");
const { verifyExistingType } = require("../utils/DataVerifier");

class MapPacksRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);

        Object.defineProperty(this, "callback", { value: callback });

        if (data.page) verifyExistingType(data.page, "number", "page");

        this.page = data.page - 1 || 0;

        Request("getGJMapPacks21", this, (data, res, err) => {
            if (err) return this.callback(err);

            let packs = [];

            data[0].forEach(pack => {
                let levels = [];
                pack[3].split(",").forEach(level => levels = [...levels, parseInt(level)]);
                packs = [...packs, {
                    id: +pack[1],
                    name: pack[2] || "N/A",
                    levels: levels,
                    stars: +pack[4] || 0,
                    coins: +pack[5] || 0,
                    difficulty: difficulties[+pack[6]] || "N/A",
                    textColor: pack[7] || "255, 255, 255",
                    barColor: pack[8] || "255,255,255"
                }];
            })

            this.callback(packs);
        });
    }
}

module.exports = MapPacksRequest;