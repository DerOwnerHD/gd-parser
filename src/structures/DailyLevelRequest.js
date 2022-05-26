'use strict';

const DataVerifier = require("../utils/DataVerifier");
const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");

const LevelBuilder = require("../builders/LevelBuilder");
const { ProfileRequest } = require("./ProfileRequest");

class DailyLevelRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);
        Object.defineProperty(this, "callback", { value: callback });

        this.levelID = data.weekly ? -2 : -1;

        Request("downloadGJLevel22", this, async (data_, res, err) => {
            if (err) return this.callback(err);

            this.str = data_[0][1];
            this.type = 0;

            delete this.levelID;

            Request("getGJLevels21", this, async (data, res, err) => {
                if (err) return this.callback(err);
                const music = [];
                const level = data_[0];

                let user = [];
                const playerID = level[6];
                if (playerID) {
                    const object = data[1];
                    if (Object.keys(object)[0] === playerID) {
                        user = [Object.keys(object)[1], object[playerID]];
                    } else if (Object.keys(object)[1] === playerID) {
                        user = [Object.keys(object)[0], object[playerID]];
                    }
                }

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
                    music.push(songData);
                }

                new LevelBuilder(level, user, music[0], true, (data) => {
                    this.callback(data);
                });
            });
        });
    }
}

module.exports = DailyLevelRequest;