const mapArrayToObject = (array, key) => {
    const objects = Object.create(null) // entirely clean object w/o __proto__ etc

    if ([] instanceof Array && typeof key == 'string') {
        array.forEach(object => {
            objects[object[key]] = object
        })
        return objects
    } else {
        console.warn('mapArrayToObject: Check the arguments passed! One or more are wrong!')
    }
}

module.exports = mapArrayToObject