function sortArrayOfObjects(arr) {
    arr.sort((a, b) => (a.name > b.name ? -1 : 1))
    arr.sort((a, b) => a.age - b.age)
    return arr
}

const arrayOfObjects = [
    {id: 1, name: "Mihir", age: 20},
    {id: 2, name: "Aryan", age: 21},
    {id: 3, name: "Krish", age: 18},
    {id: 4, name: "Kuldeep", age: 27},
    {id: 5, name: "Anuj", age: 20},
    {id: 6, name: "karan", age: 21},
    {id: 8, name: "John", age: 32},
    {id: 9, name: "Alice", age: 22},
    {id: 10, name: "Smith", age: 25}
]

const sortedArray = sortArrayOfObjects(arrayOfObjects)
console.log(sortedArray);