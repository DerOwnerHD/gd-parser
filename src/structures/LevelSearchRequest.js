'use strict';

const DataVerifier = require("../utils/DataVerifier");
const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");

const LevelBuilder = require("../builders/LevelBuilder");

class LevelSearchRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);
        Object.defineProperty(this, "callback", { value: callback });

        this.type = data.type;
        this.str = data.str;
        if (this.type) DataVerifier.verifiyNumberRange("LevelSearchType", this.type);

        Request("getGJLevels21", this, async (data, res, err) => {
            if (err) return console.error(err);
            const json = [];

            const music = [];

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
                new LevelBuilder(level, user, song, object => {json.push(object)});
            });
            this.callback(json);
        });
    }
}

exports.LevelSearchRequest = LevelSearchRequest;