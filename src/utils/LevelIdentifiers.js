const length = ["Tiny", "Short", "Medium", "Long", "XL"];
const orbs = [0, 0, 50, 75, 125, 175, 225, 275, 350, 425, 500];
const difficulty = {
    "-10": "Auto",
    "0": "N/A",
    "10": "Easy",
    "20": "Normal",
    "30": "Hard",
    "40": "Harder",
    "50": "Insane"
};
const demons = {
    3: "Easy Demon",
    4: "Medium Demon",
    0: "Hard Demon",
    5: "Insane Demon",
    6: "Extreme Demon"
}
const versions = {
    1: "Pre-1.7",
    2: "Pre-1.7",
    3: "Pre-1.7",
    4: "Pre-1.7",
    5: "Pre-1.7",
    6: "Pre-1.7",
    7: "Pre-1.7",
    10: "1.7",
    18: "1.8",
    19: "1.9",
    20: "2.0",
    21: "2.1"
}
const music = [
    ["Stay Inside Me", "OcularNebula"],
    ["Stereo Madness", "ForeverBound"],
    ["Back on Track", "DJVI"],
    ["Polargeist", "Step"],
    ["Dry Out", "DJVI"],
    ["Base After Base", "DJVI"],
    ["Can't Let Go", "DJVI"],
    ["Jumper", "Waterflame"],
    ["Time Machine", "Waterflame"],
    ["Cycles", "DJVI"],
    ["xStep", "DJVI"],
    ["Clutterfunk", "Waterflame"],
    ["Theory of Everything", "DJ-Nate"],
    ["Electroman Adventures", "Waterflame"],
    ["Clubstep", "DJ-Nate"],
    ["Electrodynamix", "DJ-Nate"],
    ["Hexagon Force", "Waterflame"],
    ["Blast Processing", "Waterflame"],
    ["Theory of Everything 2", "DJ-Nate"],
    ["Geometrical Dominator", "Waterflame"],
    ["Deadlocked", "F-777"],
    ["Fingerdash", "MDK"],
    ["The Seven Seas", "F-777"],
    ["Viking Arena", "F-777"],
    ["Airborne Robots", "F-777"],
    ["The Challenge", "RobTop"],
    ["Payload", "Dex Arson"],
    ["Beast Mode", "Dex Arson"],
    ["Machina", "Dex Arson"],
    ["Years", "Dex Arson"],
    ["Frontlines", "Dex Arson"],
    ["Space Pirates", "Waterflame"],
    ["Striker", "Waterflame"],
    ["Embers", "Dex Arson"],
    ["Round 1", "Dex Arson"],
    ["Monster Dance Off", "F-777"],
    ["Press Start", "MDK"],
    ["Nock Em", "Bossfight"],
    ["Power Trip", "Boom Kitty"]
];

module.exports = (type, data) => {
    switch (type) {
        case "length": return length[data];
        case "orbs": return orbs[data];
        case "demon": return demons[data];
        case "version": return versions[data];
        case "difficulty": return difficulty[data];
        case "music": return music[data];
    }
}