function authorName(){
    return "Sayeesh Naik"
}

function lastName() {
    return "Naik"
}

function removeDuplicatesArray(duplicateArray) {
    const uniqueArray = Array.from(new Set(duplicateArray));
    return uniqueArray;
}

function removeDuplicatesJson(duplicateJson) {
    const jsonStr = duplicateJson.map((data) => { return JSON.stringify(data) })
    const removedDuplicateJsonStr = Array.from(new Set(jsonStr))
    const removedDuplicateJson = removedDuplicateJsonStr.map((data)=>{
        return JSON.parse(data)
    })
    return removedDuplicateJson
}


module.exports = {
    authorName: authorName,
    lastName: lastName,
    removeDuplicatesArray: removeDuplicatesArray,
    removeDuplicatesJson: removeDuplicatesJson
};

