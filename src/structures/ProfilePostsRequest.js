'use strict';

const { verifyExistingType } = require("../utils/DataVerifier");
const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");

class ProfilePostsRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);

        Object.defineProperty(this, "callback", { value: callback });

        if (!data.id) verifyExistingType(data.name, "string", "name");
        if (data.page) verifyExistingType(data.page, "number", "page");

        this.str = data.name || "";

        Request("getGJUsers20", this, (userData, res, err) => {
            if (err) return this.callback({error:true});
            this.accountID = +userData[0][16] || 0;
            this.page = data.page - 1 || 0;
            this.mode = data.recent ? 0 : 1 || 1;
            Request("getGJAccountComments20", this, async (data, res, err) => {
                if (err || !data[0] || !Object.keys(data[0])[0].length) return this.callback({error:true});

                const comments = [];

                if (JSON.stringify(data[0]).startsWith("{")) data[0] = [data[0]];

                const length = res.split("#")[1].split(":"); // total, current, amount

                data[0].forEach(object => {
                    const comment = Object.keys(object)[0].split("~") || [];
                    const json = {};
                    for (let i = 0; i < comment.length; i += 2) {
                        json[comment[i]] = comment[i + 1];
                    }
                    comments.push({
                        content: Buffer.from((json[2] || ""), "base64").toString() || "",
                        id: +json[6],
                        likes: +json[4] || 0,
                        disliked: +json[4] < 0 || false,
                        username: userData[0][1] || "-",
                        playerID: +userData[0][2] || 0,
                        accountID: this.accountID || 0,
                        date: json[9] + " ago" || "N/A ago",
                    });
                });
                comments[0] = {...comments[0], results: +length[0] || 0, pages: Math.ceil(length[0] / 10), range: `${+length[1] + 1} to ${+length[0] - +length[1] < 10 ? +length[0] : +length[1] + +length[2]}`};

                this.callback(comments);
            });
        });
    }
}

module.exports = ProfilePostsRequest;