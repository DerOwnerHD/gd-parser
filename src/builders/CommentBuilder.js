const icons = ["icon", "ship", "ball", "ufo", "wave", "robot", "spider"];

class CommentBuilder {
    constructor(comment, user, cb) {
        cb({
            content: Buffer.from((comment[2] || ""), "base64").toString() || "",
            id: +comment[6] || 0,
            likes: +comment[4] || 0,
            disliked: +comment[4] < 0 || false,
            spam: !!+comment[7] || false,
            percent: +comment[10] || null,
            username: user[1] || "-",
            playerID: +comment[3] || 0,
            accountID: +comment[8] || 0,
            date: comment[9] + " ago" || "N/A ago",
            moderator: +comment[11] || 0,
            color: comment[12] || "255,255,255",
            icon: {
                form: icons[+user[14]] || "icon",
                icon: +user[9],
                col1: +user[10],
                col2: +user[11],
                glow: +user[15] === 2 || false
            }
        });
    }
}

module.exports = CommentBuilder;