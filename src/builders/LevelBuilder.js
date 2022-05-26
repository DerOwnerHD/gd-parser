const LevelIdentifiers = require("../utils/LevelIdentifiers");
const XOR = require("../utils/XOR");

class LevelBuilder {
    constructor(level, user, song, download, cb) {
        if (download && level[27] !== "0") {
            this.password = level[27];
            let xor = new XOR();
            let pass = xor.decrypt(this.password, 26364);
            if (pass.length > 1) this.password = pass.slice(1);
            else this.password = pass;
            this.password = parseInt(this.password);
        }
        this.difficulty = level[17] > 0 ? LevelIdentifiers("demon", +level[43]) || "N/A" : LevelIdentifiers("difficulty", level[9]) || "N/A";
        cb({
            id: +level[1],
            name: level[2],
            description: atob(level[3]) || "(No description provided)",
            playerID: +level[6] || 0,
            accountID: +user[0] || 0,
            author: user[1] || "-",
            downloads: +level[10] || 0,
            difficulty: this.difficulty,
            likes: +level[14] || 0,
            disliked: !!level[14] < 0,
            stars: +level[18] || 0,
            diamonds: level[18] ? +level[18] + 2 : 0,
            orbs: LevelIdentifiers("orbs", +level[18]) || 0,
            version: +level[5] || 1,
            length: LevelIdentifiers("length", +level[15]) || "Tiny",
            featured: level[19] > 0,
            epic: level[42] > 0,
            gameVersion: LevelIdentifiers("version", +level[13]) || "N/A",
            copiedID: +level[30] || 0,
            twoPlayer: level[31] > 0,
            large: +level[45] > 40000,
            officalSong: +level[35] ? 0 : +level[12] + 1,
            customSong: +level[35] || 0,
            coins: +level[37] || 0,
            verifiedCoins: level[38] > 0,
            starsRequested: +level[39] || 0,
            ldm: level[40] > 0,
            objects: +level[45] || 0,
            password: this.password || 0,
            songName: song?.name || LevelIdentifiers("music", +level[12] || 0)[0],
            songAuthor: song?.author || LevelIdentifiers("music", +level[12] || 0)[1],
            songLink: song?.url || null,
            songSize: song?.size || "0MB",
            songID: song?.id || "Level " + level[12],
            difficultyFace: `${level[17] < 1 ? this.difficulty.toLowerCase() : `demon-${this.difficulty.toLowerCase().split(" ")[0]}`}${level[42] > 0 ? "-epic" : `${level[19] > 0 ? "-featured" : ""}`}`.replace("n/a", "unrated"),
            extraData: level[36] || null,
            levelData: level[4] || null,
        });
    }
}

module.exports = LevelBuilder;