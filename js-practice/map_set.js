// => Map()
// collection of keyed data items like objects
// difference is map allow keys of any type

// Map metohds and properties
// 1. new Map() - create the map
// 2. map.set(key, value) - stores the value by the key
// 3. map.get(key) - returns the value by the key
// 4. map.has(key) - returns true if key exists
// 5. map.delete(key) - removes the element by key
// 6. map.clear() - removes everything from map
// 7. map.size() - returns the current element count


// let map = new Map()

// map.set("1", "str1")
// map.set(1, "num1")
// map.set(true, "bool1")

// console.log(map.get(1));
// console.log(map.get("1"));
// console.log(map);
// console.log(map.size);

// getting keys
// for (let key of map.keys()){
//     console.log(`key is ${key}`);
// }

// getting values
// for (let value of map.values()){
//     console.log(`value is ${value}`);
// }

// getting keys and values together
// for (let [key, value] of map){
//     console.log(`key is : ${key} & value is : ${value}`);
// }

// map.forEach((value, key) => console.log(`value: ${value} & key: ${key}`));


// let john = {
//     name: "John"
// }

// let visitsCountMap = new Map()
// visitsCountMap.set(john, 123)
// console.log(visitsCountMap.get(john));


// let john = {name: "John"}
// let ben = {name: "Ben"}

// let visitsCountObj = {}

// visitsCountObj[ben] = 234
// visitsCountObj[john] = 123

// console.log(visitsCountObj["[object Object]"]);


// => Iteratoin over map

// map.keys() - returns iterable for keys
// map.values() - returns iterable for values
// map.entries() - returns iterable for entries [key, value]

// let recipeMap = new Map([
//     ['potato', 500],
//     ['tomatoes', 350],
//     ['onion', 50]
// ])

// for (let vegatable of recipeMap.keys()){
//     console.log(vegatable);
// }

// for (let amount of recipeMap.values()){
//     console.log(amount);
// }

// for (let entry of recipeMap){
//     console.log(entry);
// }



    //  //  //  //  //  //  //  //  
// ============ Set =============== //
    //  //  //  //  //  //  //  //  


let set = new Set()

let john = { name: "John" }
let pete = { name: "Pete" }
let mary = { name: "Mary" }

// console.log(set);

set.add(john)
set.add(pete)
set.add(mary)

// console.log(set)
// console.log(set.size);

for (let user of set){
    // console.log(user);
}



// => iteration over set

let set1 = new Set([
    "oranges",
    "apples",
    "bananas"
])

for (let value of set1){
    // console.log(value);
}    

set1.forEach((val, valAgain, set1) => {
    console.log(val);
})