'use strict';

const { verifyExistingType } = require("../utils/DataVerifier");
const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");

class ArtistsRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);

        Object.defineProperty(this, "callback", { value: callback });

        if (data.page) verifyExistingType(data.page, "number", "page");

        this.page = data.page - 1 || 0;
        Request("getGJTopArtists", this, (data, res, err) => {
            if (err) return this.callback({error:true});

            const split = res.split("#");
            const keys = split[0].split("|");

            if (!split[0].length) return this.callback({error:true});

            const artists = [];

            keys.forEach(key => {
                key = key.split(":");
                const json = {};
                for (let i = 0; i < key.length; i += 2) {
                    json[key[i]] = key[i + 1];
                }
                artists.push({
                    name: json[4] || "",
                    youtube: json[7] || null
                });
            });

            const length = split[1].split(":");

            artists[0] = {
                ...artists[0],
                results: +length[0] || 0,
                pages: Math.ceil(+length[0] / 20),
                range: `${+length[1] + 1} to ${+length[1] + +length[2] > +length[0] ? +length[0] : +length[1] + +length[2]}`
            };

            this.callback(artists);
        });
    }
}

module.exports = ArtistsRequest;