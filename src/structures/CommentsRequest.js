'use strict';

const DataVerifier = require("../utils/DataVerifier");
const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");

const CommentBuilder = require("../builders/CommentBuilder");

class CommentsRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);

        Object.defineProperty(this, "callback", { value: callback });

        if (!data.id) throw new Error("levelID for comments is required");
        if (typeof data.id !== "number") throw new TypeError("levelID must be a number");

        if (data.page && typeof data.page !== "number") throw new TypeError("page must be a number");

        this.levelID = data.id || 0;
        this.page = data.page || 0;
        this.mode = data.recent ? 0 : 1 || 1;

        Request("getGJComments21", this, async (data, res, err) => {
            if (err) return this.callback(err);

            const comments = [];

            if (!JSON.stringify(data[0]).startsWith("[")) return this.callback("-1");

            data[0].forEach(object => {
                const json = {};
                const user = {};
                const chunks = Object.keys(object)[0].split("~");
                const profile = object[Object.keys(object)[0]].split("~")
                for (let i = 0; i < chunks.length; i += 2) {
                    json[chunks[i]] = chunks[i + 1];
                }
                for (let i = 0; i < profile.length; i += 2) {
                    user[profile[i]] = profile[i + 1];
                }
                new CommentBuilder(json, user, (comment) => {
                    comments.push(comment);
                })
            });

            const results = +Object.keys(data[1])[1];

            comments[0] = {...comments[0], results: results, pages: Math.round(results / 10), range: `${+data[1][results] + 1} to ${+data[1][results] + +Object.keys(data[1])[0]}`};

            this.callback(comments);
        });
    }
}

module.exports = CommentsRequest;