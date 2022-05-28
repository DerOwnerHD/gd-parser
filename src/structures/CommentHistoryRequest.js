'use strict';

const { verifyExistingType } = require("../utils/DataVerifier");
const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");

const CommentBuilder = require("../builders/CommentBuilder");
const ProfileBuilder = require("../builders/ProfileBuilder");

class CommentHistoryRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);

        Object.defineProperty(this, "callback", { value: callback });

        if (!data.id) verifyExistingType(data.name, "string", "name");
        if (data.page) verifyExistingType(data.page, "number", "page");
        if (data.id) verifyExistingType(data.id, "number", "id");

        this.mode = data.recent ? 0 : 1 || 1;
        this.str = data.name || data.id.toString();

        Request("getGJUsers20", this, (data_, res, err) => {
            if (err) return this.callback({error:true,data:err});
            this.targetAccountID = data_[0][16];
            Request("getGJUserInfo20", this, (data_, res, err) => {
                if (err) return this.callback({error:true,data:err});
                new ProfileBuilder(data_, (data_) => {
                    this.userID = data_.playerID;
                    this.page = data.page - 1 || 0;
                    Request("getGJCommentHistory", this, async (data, res, err) => {
                        if (err) return this.callback({error:true,data:err});

                        const comments = [];

                        if (!data[0] || !JSON.stringify(data[0]).startsWith("[")) return this.callback("-1");

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
                            json[8] = data_.accountID || 0;
                            new CommentBuilder(json, user, 0, (comment) => {
                                comments.push(comment);
                            })
                        });

                        const results = +Object.keys(data[1])[1];

                        comments[0] = {...comments[0], results: results, pages: Math.round(results / 10), range: `${+data[1][results] + 1} to ${+data[1][results] + +Object.keys(data[1])[0]}`};

                        this.callback(comments);
                    });
                });
            });
        });
    }
}

module.exports = CommentHistoryRequest;