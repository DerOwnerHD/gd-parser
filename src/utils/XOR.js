function xor(str, key) {
    return String.fromCodePoint(...str.split("").map((char, i) => char.charCodeAt(0) ^ key.toString().charCodeAt(i % key.toString().length)));
}
exports.encrypt = (str, key = 37526) => {
    return Buffer.from(xor(str, key)).toString("base64").replace(/./gs, c => ({"/": "_", "+": "-"}[c] || c));
}
exports.decrypt = (str, key = 37526) => {
    return xor(Buffer.from(str.replace(/./gs, c => ({"/": "_", "+": "-"}[c] || c)), "base64").toString(), key);
}