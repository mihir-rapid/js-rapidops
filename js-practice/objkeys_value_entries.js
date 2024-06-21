// => supported for
// Map, Set, Array

// Object.keys(obj) = returns array of keys
// Object.values(obj) = returns array of values
// Object.entries(obj) = returns array of [key, value] pairs

let user = {
    name: "John",
    age: 30
}

// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.keys(user) = [["name", "John"], ["age", 30]]

for (let value of Object.entries(user)){
    // console.log(value);
}


// => Transforming objects

let prices = {
    banana: 1,
    orange: 2,
    coconut: 4
}

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
)
console.log(doublePrices.coconut);


// task-1

function sumSalaries(salaries){
    let sum = 0
    for (let salary of Object.values(salaries)){
        sum += salary
    }
    return sum
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

console.log(sumSalaries(salaries));


function sumSalaries1(salaries){
    return Object.values(salaries).reduce((a, b) => a + b, 0)
}
console.log(sumSalaries1(salaries));



// task-2

function count(obj){
    return Object.keys(obj).length
}

console.log(count(prices));