const numberRanges = {
    "LevelSearchType": [0, 18, [9, 14]],
    "LevelDifficultyFilter": [-2, 5, [0]]
};

function verifyNumberRange(type, data) {
    if (!numberRanges[type]) throw new TypeError("Type " + type + " not found");
    if (data < numberRanges[type][0] || data > numberRanges[type][1]) throw new RangeError(type + " is out of allowed range");
    if (numberRanges[type][2][numberRanges[type][2].indexOf(data)]) throw new Error(type + " has not allowed value");
}
exports.verifiyNumberRange = verifyNumberRange;