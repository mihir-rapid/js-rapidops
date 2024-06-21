function insertString(originalString, stringToInsert, position = 1) {
    if (position < 1 || position > originalString.length + 1) {
        console.log("Invalid position");
        return originalString
    }

    const start = originalString.slice(0, position - 1)
    const end = originalString.slice(position - 1)

    return start + stringToInsert + end
}

const originalString = "Hello World"
const stringToInsert = "JavaScript"
const modifiedString = insertString(originalString, stringToInsert, 3)
console.log(modifiedString);