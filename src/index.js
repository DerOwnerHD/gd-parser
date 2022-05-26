exports.BaseRequest = require("./structures/BaseRequest");
const { LevelSearchRequest } = require("./structures/LevelSearchRequest");
const { ProfileRequest } = require("./structures/ProfileRequest");

/*new LevelSearchRequest({type:"TRENDING"}, (data) => {
    //console.log(data);
})

 */

new ProfileRequest({str:"DerOwnerHD"}, (data) => {
    console.log(data);
})
