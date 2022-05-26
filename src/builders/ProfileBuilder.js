const privacyStates = ["all", "friends", "off"];

class ProfileBuilder {
    constructor(user, cb) {
        cb({
            username: user[1] || "-",
            playerID: +user[2] || 0,
            accountID: +user[16] || 0,
            rank: +user[30] || 0,
            stars: +user[3] || 0,
            diamonds: +user[46] || 0,
            coins: +user[13] || 0,
            userCoins: +user[17] || 0,
            demons: +user[4] || 0,
            cp: +user[8] || 0,
            friendRequests: !!+user[19] || false,
            messages: privacyStates[+user[18]] || "off",
            commentHistory: privacyStates[+user[50]] || "off",
            moderator: +user[49] || 0,
            youtube: user[20] || null,
            twitter: user[44] || null,
            twitch: user[45] || null,
            icon: +user[21] || 1,
            ship: +user[22] || 1,
            ball: +user[23] || 1,
            ufo: +user[24] || 1,
            wave: +user[25] || 1,
            robot: +user[26] || 1,
            spider: +user[43] || 1,
            col1: +user[10] || 1,
            col2: +user[11] || 1,
            deathEffect: +user[48] || 1,
            glow: !!+user[28] || false
        });
    }
}

module.exports = ProfileBuilder;