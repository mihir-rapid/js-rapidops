function chopString(inputString, chunkLength) {
    if (chunkLength <= 0) {
        console.error("Error: Invalid length");
        return [inputString]
    }

    const chunks = []
    for (let i=0; i<inputString.length; i+=chunkLength) {
        chunks.push(inputString.slice(i, i+chunkLength))
    }
    return chunks
}

const originalString = "Rapidops"
const chunksLength = 3
const choppedString = chopString(originalString, chunksLength)
console.log(choppedString);