function deleteAndAdd(arr, positionToDelete, newObj, newPosition) {
    if (positionToDelete < 1 || positionToDelete > arr.length) {
        console.log("Error: Invalid position");
        return arr
    }

    arr.splice(positionToDelete -1, 1)
    if (newPosition < 1 || newPosition > arr.length + 1) {
        console.log("Error: Invalid position");
        return arr
    }

    arr.splice(newPosition -1, 0, newObj)
    return arr
    
}

const arrayOfObjects = [
    {id: 1, name: "Mihir", age: 20},
    {id: 2, name: "Aryan", age: 21},
    {id: 3, name: "Krish", age: 18},
]

const positionToDelete = 2
const newObj = {id: 4, name: "Kuldeep", age: 27}
const newPosition = 2
const modifiedArray = deleteAndAdd(arrayOfObjects, positionToDelete, newObj, newPosition)

console.log(modifiedArray);