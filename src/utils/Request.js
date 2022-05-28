const request = require("request");
const ResponseParser = require("./ResponseParser");

module.exports = async (endpoint = "", data = {}, callback = () => {}) => {

    const parameters = { form: data, headers: {} };

    //console.log("http://www.boomlings.com/database/" + endpoint + ".php", JSON.stringify(parameters)) // for debugging purposes

    request.post("http://www.boomlings.com/database/" + endpoint + ".php", parameters, (err, res, body) => {
        let error = err;
        if (!error && (err || !body || body.match(/^-\d$/) || body.startsWith("error") || body.startsWith("<"))) {
            error = body;
        } if (!error) {
            ResponseParser(body, callback);
        } else {
            return callback(body, body, error);
        }
    });
}