exports.BaseRequest = require("./structures/BaseRequest");
const { LevelSearchRequest } = require("./structures/LevelSearchRequest");

new LevelSearchRequest({type:2,str:"4454123"}, (data) => {
    console.log(data);
})
