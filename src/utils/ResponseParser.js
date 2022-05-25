module.exports = (raw, cb = () => {}, type) => {
    const objects = raw.split("#");

    const splittedObjects = [];

    objects.forEach(x => {
        const splittedX = [];
        x.split("|").forEach(y => {
            const splitted = y.split(":"); // splitted everything
            const obj = {};
            for (let i = 0; i < splitted.length; i += 2) {
                obj[splitted[i]] = splitted[i + 1];
            } splittedX.push(obj);
        }); splittedObjects.push(splittedX);
    });

    cb(splittedObjects, raw);
}