const request = require("request");
const ResponseParser = require("./ResponseParser");

module.exports = async (endpoint = "", data = {}, callback = () => {}) => {

    const config = {
        secret: "Wmfd2893gb7",
        gameVersion: "21",
        binaryVersion: "35",
        gdbrowser: "1"
    };

    Object.keys(config).forEach(x => {
        if (!data[x]) data[x] = config[x];
    });
    const parameters = {form: data, headers: {}};

    console.log("http://www.boomlings.com/database/" + endpoint + ".php", parameters)

    request.post("http://www.boomlings.com/database/" + endpoint + ".php", parameters, (err, res, body) => {
        let error = err;
        if (!error && (err || !body || body.match(/^-\d$/) || body.startsWith("error") || body.startsWith("<"))) {
            error = {response: body};
        } if (!error) {
            ResponseParser(body, callback);
        } else {
            return callback(body, null, error);
        }
    });
}