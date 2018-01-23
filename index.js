const mapArrayToObject = (array, key) => {
    const objects = {}
    array.forEach(object => {
        objects[object[key]] = object
    })
    return objects
}

export mapArrayToObject