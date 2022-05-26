module.exports = (raw, cb = () => {}, type) => {
    const objects = raw.split("#");

    let splittedObjects = [];

    objects.forEach(x => {
        let splittedX = [];
        x.split("|").forEach(y => {
            const splitted = y.split(":"); // splitted everything
            const obj = {};
            for (let i = 0; i < splitted.length; i += 2) {
                obj[splitted[i]] = splitted[i + 1];
            } splittedX.push(obj);
        }); if (splittedX.length === 1) splittedX = splittedX[0];
        splittedObjects.push(splittedX);
    });

    if (splittedObjects.length === 1) splittedObjects = splittedObjects[0];

    cb(splittedObjects, raw);
}