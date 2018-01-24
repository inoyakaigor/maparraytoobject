const mapArrayToObject = (array, key) => {
    const objects = {}

    if ([] instanceof Array && typeof key == 'string') {
        array.forEach(object => {
            objects[object[key]] = object
        })
    } else {
        console.warn('mapArrayToObject:\nCheck the arguments passed! One or more are wrong! Will return empty object')
    }

    return objects
}

module.exports = mapArrayToObject