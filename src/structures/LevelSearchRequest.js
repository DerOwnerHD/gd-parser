'use strict';

const DataVerifier = require("../utils/DataVerifier");
const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");

const LevelBuilder = require("../builders/LevelBuilder");

class LevelSearchRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);
        Object.defineProperty(this, "callback", { value: callback });

        const types = {
            MOST_LIKED: 0,
            MOST_DOWNLOADED: 1,
            DEFAULT: 2,
            TRENDING: 3,
            RECENT: 4,
            FEATURED: 5,
            MAGIC: 6,
            MAP_PACK: 10,
            AWARDED: 11,
            MOST_LIKED_GDW: 15,
            HALL_OF_FAME: 16,
            FEATURED_GDW: 17,
        };

        if (typeof data.type === "number") {
            this.type = data.type;
        } else if (typeof data.type === "string") {
            this.type = types[data.type] || 0;
        }

        this.str = data.str;
        this.diff = data.diff;
        this.demonFilter = data.demonFilter;
        this.page = data.page - 1 || "0";
        this.len = data.len;
        this.gauntlet = data.gauntlet || 0;
        this.song = data.song;
        this.featured = data.featured ? 1 : 0;
        this.originalOnly = data.originalOnly ? 1 : 0;
        this.twoPlayer = data.twoPlayer ? 1 : 0;
        this.coins = data.coins ? 1 : 0;
        this.epic = data.epic ? 1 : 0;
        this.star = data.star ? 1 : 0;
        this.noStar = data.noStar ? 1 : 0;
        this.customSong = data.customSong || 0;
        this.count = data.count || 10;
        if (this.type) DataVerifier.verifiyNumberRange("LevelSearchType", this.type);

        Request("getGJLevels21", this, async (data, res, err) => {
            if (err) return this.callback(err);
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
                new LevelBuilder(level, user, song, false,object => {json.push(object)});
            });
            this.callback(json);
        });
    }
}

exports.LevelSearchRequest = LevelSearchRequest;