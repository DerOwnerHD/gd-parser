const numberRanges = { // min, max, [exceptions]
    "LevelSearchType": [0, 17, [7, 8, 9, 12, 13, 14]],
    "LevelDifficultyFilter": [-3, 5, [-1, 0]],
    "LevelDemonFilter": [1, 5, []],
};

function verifyNumberRange(type, data) {
    if (!numberRanges[type]) throw new TypeError("Type " + type + " not found");
    if (data < numberRanges[type][0] || data > numberRanges[type][1]) throw new RangeError(type + " is out of allowed range");
    if (numberRanges[type][2][numberRanges[type][2].indexOf(data)]) throw new Error(type + " has not allowed value");
}

/**
 * Verifies if an object exists and if it's a given type
 * I don't actually know of a better name for it -_-
 */
function verifyExistingType(object, type, name) {
    if (object === undefined || null) throw new Error(name + " is required");
    if (typeof object !== type) throw new TypeError(name + ` must be a${type.startsWith("a" || "e" || "i" || "o" || "u") ? "n" : ""} ` + type);
    // why the fuck would I add "a(n)" validation in typeerror throw? idk
}

exports.verifyNumberRange = verifyNumberRange;
exports.verifyExistingType = verifyExistingType;