'use strict';

const { verifyNumberRange, verifyExistingType } = require("../utils/DataVerifier");
const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");

const LevelBuilder = require("../builders/LevelBuilder");

class GauntletDataRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);

        Object.defineProperty(this, "callback", {value: callback});

        verifyExistingType(data.gauntlet, "number", "gauntlet");

        this.gauntlet = data.gauntlet || 1;

        Request("getGJLevels21", this, async (data, res, err) => {
            if (err) return this.callback(err);
            const json = [];
            let music = [];

            if (!JSON.stringify(data).startsWith("[")) return this.callback("-1");

            for (let i = 0; i < data[2].length; i += 17) {
                const chunk = data[2].slice(i, i + 17);
                if (chunk.length !== 17) continue;
                const songData = {
                    id: +Object.keys(chunk[1])[0].replaceAll("~", ""),
                    name: Object.keys(chunk[3])[0].replaceAll("~", ""),
                    author: Object.keys(chunk[7])[0].replaceAll("~", ""),
                    url: decodeURIComponent(Object.keys(chunk[13])[0].replaceAll("~", "")),
                    size: Object.keys(chunk[9])[0].replaceAll("~", "") + "MB"
                }
                music = [...music, songData];
            }

            data[0].forEach(async level => {
                let user = [];
                const playerID = level[6];
                if (playerID) {
                    data[1].forEach(object => {
                        if (Object.keys(object)[0] === playerID) {
                            user = [Object.keys(object)[1], object[playerID]];
                        } else if (Object.keys(object)[1] === playerID) {
                            user = [Object.keys(object)[0], object[playerID]];
                        }
                    });
                }
                let song = {};
                music.forEach(track => {
                    if (track.id === +level[35]) {
                        song = track;
                    }
                });
                new LevelBuilder(level, user, song, false,object => {json.push(object)});
            });
            this.callback(json);
        });
    }
}

module.exports = GauntletDataRequest;