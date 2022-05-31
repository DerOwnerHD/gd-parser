const { BaseRequest } = require("./BaseRequest");
const Request = require("../utils/Request");
const { verifyExistingType } = require("../utils/DataVerifier");
const XOR = require("../utils/XOR");

class MessagesRequest extends BaseRequest {
    constructor(data, callback) {
        super(data, callback);

        Object.defineProperty(this, "callback", {value: callback});

        const types = {
            RECEIVED: 0,
            SENT: 1,
            UPLOAD: 2,
            DELETE: 3,
            DETAILS: 4
        }

        const type = types[data.type];

        verifyExistingType(data.name, "string", "name");
        verifyExistingType(data.password, "string", "password");
        verifyExistingType(data.type, "string", "type");
        if (type < 2 && data.page) verifyExistingType(data.page, "number", "page");
        else if (type === 2) { // upload
            verifyExistingType(data.receiver, "string", "receiver");
            verifyExistingType(data.title, "string", "title");
            verifyExistingType(data.content, "string", "content");
        } else if (type > 2) { // delete and details
            verifyExistingType(data.id, "number", "id");
        }

        this.str = data.name || "";

        Request("getGJUsers20", this, (userData, res, err) => {
            if (err) return this.callback({error:true});
            delete this.str;
            this.accountID = +userData[0][16] || 0;
            this.gjp = XOR.encrypt(data.password || "");

            if (type < 2) { // 0, 1
                this.page = data.page - 1 || 0;
                this.getSent = types[data.type] || 0;

                Request("getGJMessages20", this, (messageData, res, err) => {
                    if (err) return this.callback({error:true});

                    const messages = [];

                    if (!JSON.stringify(messageData[0]).startsWith("[")) messageData[0] = [messageData[0]];
                    messageData[0].forEach(message => {
                        const msg = {
                            id: +message[1] || 0,
                            title: Buffer.from((message[4] || ""), "base64").toString() || "",
                            name: message[6] || "-",
                            accountID: +message[2] || 0,
                            playerID: +message[3] || 0,
                            date: message[7] + " ago" || "N/A ago ",
                            read: !!+message[8] || false,
                            sender: !!+message[9] || false
                        };
                        messages.push(msg);
                    });

                    return this.callback(messages);
                });
            } else if (type === 2) { // upload message
                this.str = data.receiver || "";
                Request("getGJUsers20", this, (receiverData, res, err) => {
                    if (err) return this.callback({error:true});
                    this.toAccountID = +receiverData[0][16] || 0;
                    this.subject = Buffer.from(data.title.slice(0, 300) || "").toString("base64") || "N/A";
                    this.body = XOR.encrypt(data.content.slice(0, 300) || "", 14251);

                    Request("uploadGJMessage20", this, (messageData, res, err) => {
                        if (err) return this.callback({error:true});
                        return this.callback({error:false});
                    });
                });
            } else if (type === 3) { // delete message
                this.isSender = (data.sender ? 1 : 0) || undefined;
                this.messageID = data.id || 0;
                Request("deleteGJMessages20", this, (messageData, res, err) => {
                    if (err) return this.callback({error:true});
                    return this.callback({error:false}); // can't check if message actually was deleted
                });
            } else if (type === 4) { // fetch message details
                this.messageID = data.id || 0;
                Request("downloadGJMessage20", this, (messageData, res, err) => {
                    if (err) return this.callback({error:false});
                    const msg = {
                        id: +messageData[1] || 0,
                        title: Buffer.from((messageData[4] || ""), "base64").toString() || "",
                        text: XOR.decrypt(messageData[5] || "", 14251),
                        name: messageData[6] || "-",
                        accountID: +messageData[2] || 0,
                        playerID: +messageData[3] || 0,
                        date: messageData[7] + " ago" || "N/A ago ",
                        read: !!+messageData[8] || false,
                        sender: !!+messageData[9] || false
                    };

                    return this.callback(msg);
                });
            }
        });
    }
}

module.exports = MessagesRequest;