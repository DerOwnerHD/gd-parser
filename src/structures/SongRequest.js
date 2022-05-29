'use strict';

const { verifyExistingType } = require("../utils/DataVerifier");
const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");

class SongRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);

        Object.defineProperty(this, "callback", { value: callback });

        verifyExistingType(data.id, "number", "id");

        this.songID = data.id || 0;
        Request("getGJSongInfo", this, (data, res, err) => {
            if (err) return this.callback({error:true});

            const keys = res.split("~|~");

            const json = {};
            for (let i = 0; i < keys.length; i += 2) {
                json[keys[i]] = keys[i + 1];
            }

            this.callback({
                id: +json[1] || 0,
                name: json[2] || "",
                artist: {
                    id: +json[3] || 0,
                    name: json[4] || "",
                    scouted: !!json[8] || false,
                    youtube: json[7] || null
                },
                size: json[5] + "MB",
                priority: json[9] || 0,
                link: decodeURIComponent(json[10]) || null,
                video: json[6] || null
            });
        });
    }
}

module.exports = SongRequest;